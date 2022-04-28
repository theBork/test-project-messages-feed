import styled from "styled-components";
import { space } from "styled-system";
import Box from "ui/Box";
import Text from "ui/Text";
import MessageCardComponent from "./components/MessageCard";

export const Wrapper = styled(Box)``;

export const MessageCard = styled(MessageCardComponent).attrs({
  mb: [2, 4, 4],
})`
  ${space};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const NoMessagesText = styled(Text).attrs({
  variant: "body1Regular",
  color: "textSecondary",
})``;
