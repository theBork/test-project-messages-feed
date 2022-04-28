import styled from "styled-components";
import Text from "ui/Text";
import Box from "ui/Box";

export const Wrapper = styled(Box)``;

export const InfoRow = styled(Box).attrs({
  mb: 2,
})``;

export const InfoLabel = styled(Text).attrs({
  variant: "body1Semibold",
  color: "textPrimary",
  as: "span",
})`
  &:after {
    content: ": ";
  }
`;

export const InfoValue = styled(Text).attrs({
  variant: "body1Regular",
  color: "textPrimary",
  as: "span",
})``;
