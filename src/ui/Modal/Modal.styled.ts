import styled from "styled-components";
import Box from "ui/Box";
import { MODAL_PADDING_DESKTOP, MODAL_PADDING_MOBILE, MODAL_PADDING_TABLET } from "constants/space";
import Text from "ui/Text";

export const Wrapper = styled(Box).attrs({
  bg: "simpleWhite",
  p: [MODAL_PADDING_MOBILE, MODAL_PADDING_TABLET, MODAL_PADDING_DESKTOP],
})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  min-width: 50%;
  max-width: 90%;
  max-height: 90%;
  
  ${({ theme }) => `${theme.mediaQueries.mobile} {
    width: 100%;
    max-width: unset;
    transform: unset;
    left: 0;
    top: unset;
    bottom: 0;
  }`};
`;

export const CloseButtonWrapper = styled(Box).attrs({
  p: [2, 4, 6],
})`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Title = styled(Text).attrs({
  variant: "h2",
  color: "simpleBlack",
  pb: 4,
})``;

export const ActionButtonsContainer = styled(Box).attrs({
  pt: 4,
})`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  & > * {
    margin-left: ${({ theme }) => `${theme.space[2]}px`};
  }
`;
