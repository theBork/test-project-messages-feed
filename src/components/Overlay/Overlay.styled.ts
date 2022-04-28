import styled from "styled-components";
import { zIndex } from "styled-system";
import Box from "ui/Box";

export const Overlay = styled(Box).attrs({
  bg: "overlay40",
  zIndex: "overlay",
})`
  ${zIndex};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;
