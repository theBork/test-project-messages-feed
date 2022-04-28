import React from "react";
import { Message } from "api/types";
import * as Styled from "./MessagesList.styled";

interface MessagesListProps {
  area: "chat" | "author";
  messages: Message[];
}

const MessagesList: React.FC<MessagesListProps> = (props) => {
  const { area, messages } = props;
  return (
    <Styled.Wrapper>
      {messages.length
        ? messages.map(message => <Styled.MessageCard align={area === "author" ? "left" : "right"} key={message.id} {...message} />)
        : <Styled.NoMessagesText>Сообщений пока нет</Styled.NoMessagesText>}
    </Styled.Wrapper>
  );
};

export default MessagesList;
