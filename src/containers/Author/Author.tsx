import React, { useState, useEffect } from "react";
import { useParams, navigate } from "@reach/router";
import parseISO from "date-fns/parseISO";
import useDataLoader from "hooks/useDataLoader";
import getMessagesByAuthorIdRequest from "api/requests/getMessagesByAuthorId";
import getAuthorInfoRequest from "api/requests/getAuthorInfo";
import MessagesList from "components/MessagesList";
import InfoMessage from "components/InfoMessage";
import Title from "components/Title";
import { Message } from "api/types";
import * as Styled from "./Author.styled";

const Author: React.FC = () => {
  const [sortedMessages, setSortedMessages] = useState<Message[]>([]);

  const {
    state: { data: messages, isLoading: isLoadingMessages, error: errorMessages },
    makeRequest: makeMessagesRequest,
  } = useDataLoader(getMessagesByAuthorIdRequest);

  const {
    state: { data: authorInfo, isLoading: isLoadingAuthorInfo, error: errorAuthorInfo },
    makeRequest: makeAuthorInfoRequest,
  } = useDataLoader(getAuthorInfoRequest);

  const { authorId } = useParams();

  useEffect(() => {
    if (!messages) {
      setSortedMessages([]);
      return;
    }

    setSortedMessages([...messages].sort((a, b) => +parseISO(b.date) - +parseISO(a.date)));
  }, [messages]);

  useEffect(() => {
    makeMessagesRequest(authorId);
    makeAuthorInfoRequest(authorId);
  }, [authorId]);

  const isLoading = isLoadingMessages || isLoadingAuthorInfo;
  const error = errorMessages || errorAuthorInfo;

  if (isLoading) return <InfoMessage text="Пожалуйста, подождите. Идёт загрузка сообщений" />;
  if (error) return <InfoMessage text={error} />;
  if (!sortedMessages || !authorInfo) return <InfoMessage text="Произошла ошибка во время завгрузки информации об авторе" />;
  return (
    <div>
      <Styled.BackButton size="s" fill="outline" onClick={() => navigate("/")}>на главную</Styled.BackButton>
      <Title type="h1">Информация об авторе</Title>
      <Styled.AuthorInfo {...authorInfo} />
      <Title type="h2">Все сообщения автора</Title>
      <MessagesList area="author" messages={sortedMessages} />
    </div>
  );
};

export default Author;
