import React, { useEffect } from "react";
import useDataLoader from "hooks/useDataLoader";
import getAllMessagesRequest from "api/requests/getAllMessages";
import MessagesList from "components/MessagesList";
import InfoMessage from "components/InfoMessage";
import Title from "components/Title";

const Messages: React.FC = () => {
  const { state: { data: messages, isLoading, error }, makeRequest } = useDataLoader(getAllMessagesRequest);

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <div>
      <Title type="h1">Сообщения</Title>
      {
        (messages && <MessagesList area="chat" {...{ messages }} />)
        || (isLoading && <InfoMessage text="Пожалуйста, подождите. Идёт загрузка сообщений" />)
        || (error && <InfoMessage text={error || "Произошла ошибка во время завгрузки сообщений"} />)
      }
    </div>
  );
};

export default Messages;
