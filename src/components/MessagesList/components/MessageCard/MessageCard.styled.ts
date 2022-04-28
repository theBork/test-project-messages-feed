import styled from "styled-components";
import Box from "ui/Box";
import Text from "ui/Text";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const MessageBody = styled(Box).attrs({
  bg: "cardPrimary",
  p: 4,
  pb: 2,
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 8px;
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

export const MessageInfo = styled(Box)`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;
