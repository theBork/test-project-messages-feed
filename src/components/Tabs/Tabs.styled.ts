import styled from "styled-components";
import { space } from "styled-system";
import Box from "ui/Box";
import Button from "ui/Button";

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
`;

interface IsActiveProp { isActive: boolean }

export const TabButton = styled(Button).attrs<IsActiveProp>(({ isActive }) => ({
  mr: 2,
  fill: isActive ? "fill" : "outline",
}))<IsActiveProp>`
  ${space};
  &:last-child {
    margin-right: 0;
  }
`;
