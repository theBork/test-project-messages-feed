import React, { useState, useEffect } from "react";
import parseISO from "date-fns/parseISO";
import getAllMessagesRequest from "api/requests/getAllMessages";
import addMessageRequest from "api/requests/addMessage";
import MessagesList from "components/MessagesList";
import InfoMessage from "components/InfoMessage";
import Title from "components/Title";
import useTheme from "hooks/useTheme";
import useQueryParams from "hooks/useQueryParams";
import { Message } from "api/types";
import AddMessageModal from "./modals/AddMessageModal";
import PlusCircleIcon from "../../icons/PlusCircleIcon";
import { filterMessagesByPeriod } from "./utils";
import { AddMessageForm, MessageFilterPeriod } from "./Messages.types";
import * as Styled from "./Messages.styled";

const availableFilters: Record<MessageFilterPeriod, string> = {
  all: "за всё время",
  week: "за неделю",
  "three-days": "за три дня",
  today: "за сегодня",
};

const Messages: React.FC = () => {
  const [isOpenedAddMessageModal, setIsOpenedAddMessageModal] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState<MessageFilterPeriod>("all");
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { colors: { simpleBlack } } = useTheme();
  const { queryParams, setQueryParams } = useQueryParams();

  useEffect(() => {
    if (!queryParams.period || typeof queryParams.period !== "string" || !Object.keys(availableFilters).includes(queryParams.period)) {
      setQueryParams({
        ...queryParams,
        period: "all",
      });
      setActiveFilterTab("all");

      return;
    }

    setActiveFilterTab(queryParams.period as MessageFilterPeriod);
  }, [activeFilterTab, queryParams]);

  useEffect(() => {
    getAllMessagesRequest()
      .then((data) => {
        setMessages(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(() => {
        setMessages(null);
        setIsLoading(false);
        setError("Произошла ошибка во время получения списка сообщений");
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [filteredMessages]);

  useEffect(() => {
    if (!messages) {
      setFilteredMessages([]);
    } else {
      const newFilteredMessages = filterMessagesByPeriod(messages, activeFilterTab);
      setFilteredMessages(newFilteredMessages.sort((a, b) => +parseISO(a.date) - +parseISO(b.date)));
    }
  }, [messages, activeFilterTab]);

  const handleChangeTab = (newTabValue: MessageFilterPeriod) => {
    setQueryParams({
      ...queryParams,
      period: newTabValue,
    });
  };

  const handleAddNewMessage = async (formValues: AddMessageForm) => {
    try {
      const newMessage = await addMessageRequest(formValues.text);
      setMessages([...messages!, newMessage]);
    } catch {
      setMessages(null);
      setError("не получилось добавить сообщение");
    }
  };

  return (
    <>
      {isOpenedAddMessageModal && (
        <AddMessageModal
          onClose={() => setIsOpenedAddMessageModal(false)}
          onSubmit={handleAddNewMessage}
        />
      )}
      <Styled.Header>
        <Styled.TitleContainer>
          <Title type="h1" withoutPadding>Сообщения</Title>
          {messages && !isLoading && !error && (
            <Styled.AddIconWrapper onClick={() => setIsOpenedAddMessageModal(true)}>
              <PlusCircleIcon size="l" baseColor={simpleBlack} />
            </Styled.AddIconWrapper>
          )}
        </Styled.TitleContainer>
        <Styled.Tabs
          activeItem={activeFilterTab}
          items={[
            { value: "all", title: "за всё время", onClick: () => handleChangeTab("all") },
            { value: "week", title: "за неделю", onClick: () => handleChangeTab("week") },
            { value: "three-days", title: "за 3 дня", onClick: () => handleChangeTab("three-days") },
            { value: "today", title: "за сегодня", onClick: () => handleChangeTab("today") },
          ]}
        />
      </Styled.Header>
      <Styled.MessagesContainer>
        {
          (filteredMessages && <MessagesList area="chat" messages={filteredMessages} />)
          || (isLoading && <InfoMessage text="Пожалуйста, подождите. Идёт загрузка сообщений" />)
          || (error && <InfoMessage text={error || "Произошла ошибка во время завгрузки сообщений"} />)
        }
      </Styled.MessagesContainer>
    </>
  );
};

export default Messages;
