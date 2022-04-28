import React from "react";
import { Link } from "@reach/router";
import { formatRelative, parseISO } from "date-fns";
import ruLocale from "date-fns/locale/ru";
import { Message } from "api/types";
import { MessageCardAlign } from "./MessageCard.types";
import * as Styled from "./MessageCard.styled";

interface MessageCardProps extends Message {
  align?: MessageCardAlign;
  className?: string;
}

const MessageCard: React.FC<MessageCardProps> = (props) => {
  const { align, authorId, authorNick, className, date, text } = props;

  return (
    <Styled.Wrapper {...{ className, align }}>
      <Styled.MessageBody>
        <Styled.MessageText>{text}</Styled.MessageText>
        <Styled.MessageInfo>
          <Styled.MessageDate>{formatRelative(parseISO(date), new Date(), { locale: ruLocale })}</Styled.MessageDate>
          <Link to={`/authors/${authorId}`}>
            <Styled.MessageAuthor>{authorNick}</Styled.MessageAuthor>
          </Link>
        </Styled.MessageInfo>
      </Styled.MessageBody>
    </Styled.Wrapper>
  );
};

export default MessageCard;
