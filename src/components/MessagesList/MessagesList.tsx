import React from "react";
import { Message } from "api/types";
import * as Styled from "./MessagesList.styled";

interface MessagesListProps {
  messages: Message[];
}

const MessagesList: React.FC<MessagesListProps> = (props) => {
  const { messages } = props;
  return (
    <Styled.Wrapper>
      {messages.length
        ? messages.map(message => <Styled.MessageCard key={message.id} {...message} />)
        : <Styled.NoMessagesText>Сообщений пока нет</Styled.NoMessagesText>}
    </Styled.Wrapper>
  );
};

export default MessagesList;
