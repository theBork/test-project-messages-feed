import styled from "styled-components";
import { zIndex } from "styled-system";
import Box from "ui/Box";
import TabsComponent from "components/Tabs";

const TITLE_CONTAINER_HEIGHT_PX = 60;

export const Header = styled(Box).attrs({
  px: 8,
  bg: "simpleWhite",
  zIndex: "overlay",
})`
  ${zIndex};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${TITLE_CONTAINER_HEIGHT_PX}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;

export const TitleContainer = styled(Box).attrs({
})`
  display: flex;
  align-items: center;
`;

export const Tabs = styled(TabsComponent)``;

export const MessagesContainer = styled(Box)`
  padding-top: ${TITLE_CONTAINER_HEIGHT_PX}px;
`;

export const AddIconWrapper = styled(Box).attrs({
  ml: 2,
})`
  font-size: 0;
  cursor: pointer;
`;
