import React from "react";
import { formatRelative, parseISO } from "date-fns";
import ruLocale from "date-fns/locale/ru";
import { Message } from "api/types";
import * as Styled from "./MessageCard.styled";

interface MessageCardProps extends Message {
  className?: string;
}

const MessageCard: React.FC<MessageCardProps> = (props) => {
  const { author, className, date, text } = props;

  return (
    <Styled.Wrapper {...{ className }}>
      <Styled.MessageBody>
        <Styled.MessageText>{text}</Styled.MessageText>
        <Styled.MessageInfo>
          <Styled.MessageDate>{formatRelative(parseISO(date), new Date(), { locale: ruLocale })}</Styled.MessageDate>
          <Styled.MessageAuthor>{author}</Styled.MessageAuthor>
        </Styled.MessageInfo>
      </Styled.MessageBody>
    </Styled.Wrapper>
  );
};

export default MessageCard;
