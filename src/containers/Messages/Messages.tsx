import React, { useState, useEffect } from "react";
import parseISO from "date-fns/parseISO";
import useDataLoader from "hooks/useDataLoader";
import getAllMessagesRequest from "api/requests/getAllMessages";
import MessagesList from "components/MessagesList";
import InfoMessage from "components/InfoMessage";
import Title from "components/Title";
import useTheme from "hooks/useTheme";
import useQueryParams from "hooks/useQueryParams";
import { Message } from "api/types";
import PlusCircleIcon from "../../icons/PlusCircleIcon";
import { filterMessagesByPeriod } from "./utils";
import { MessageFilterPeriod } from "./Messages.types";
import * as Styled from "./Messages.styled";

const availableFilters: Record<MessageFilterPeriod, string> = {
  all: "за всё время",
  week: "за неделю",
  "three-days": "за три дня",
  today: "за сегодня",
};

const Messages: React.FC = () => {
  const [activeFilterTab, setActiveFilterTab] = useState<MessageFilterPeriod>("all");
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
  const { state: { data: messages, isLoading, error }, makeRequest } = useDataLoader(getAllMessagesRequest);
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
    makeRequest();
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

  return (
    <>
      <Styled.Header>
        <Styled.TitleContainer>
          <Title type="h1" withoutPadding>Сообщения</Title>
          <Styled.AddIconWrapper>
            <PlusCircleIcon size="l" baseColor={simpleBlack} />
          </Styled.AddIconWrapper>
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
