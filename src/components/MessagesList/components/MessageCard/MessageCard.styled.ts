import styled from "styled-components";
import Box from "ui/Box";
import Text from "ui/Text";
import { MessageCardAlign } from "components/MessagesList/components/MessageCard/MessageCard.types";

export const MessageInfo = styled(Box)`
  width: 100%;
  position: relative;
  display: flex;
`;

export const MessageBody = styled(Box).attrs({
  bg: "cardPrimary",
  p: 4,
  pb: 2,
})`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

interface AlignProp { align?: MessageCardAlign }

export const Wrapper = styled(Box)<AlignProp>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === "left" ? "flex-start" : "flex-end")};
  
  & ${MessageInfo} {
    justify-content: ${({ align }) => (align === "left" ? "flex-start" : "flex-end")};
  };

  & ${MessageBody} {
    align-items: ${({ align }) => (align === "left" ? "flex-start" : "flex-end")};
  };
`;

export const MessageText = styled(Text).attrs({
  variant: "body1Regular",
  color: "textPrimary",
  mb: 2,
})``;

export const MessageDate = styled(Text).attrs({
  variant: "body2Regular",
  color: "textSecondary",
  as: "em",
  mr: 2,
})``;

export const MessageAuthor = styled(Text).attrs({
  variant: "body2Semibold",
  color: "textPrimary",
})`
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    opacity: 0.6;
  }
`;
