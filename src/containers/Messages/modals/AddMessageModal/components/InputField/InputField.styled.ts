import styled from "styled-components";
import Box from "ui/Box";
import Text from "ui/Text";

export const InputWrapper = styled(Box)``;

export const Input = styled(Text).attrs({
  p: 2,
  mb: 2,
  as: "input",
  autoComplete: "off",
})`
  width: 100%;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;

interface HasErrorProp { hasError: boolean }

export const ErrorBlock = styled(Text).attrs({
  variant: "body2Regular",
  color: "error",
})<HasErrorProp>`
  transition: height 0.2s ease;
  height: ${({ hasError, theme }) => (hasError ? theme.typography.body2Regular.lineHeight : "0px")};
`;
