import styled, { css } from "styled-components";
import Box from "ui/Box";

export const Layout = styled(Box)`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
  ${({ theme }) => css`
    padding: ${theme.space[8]}px ${theme.space[15]}px;
    
    ${theme.mediaQueries.tablet} {
      padding: ${theme.space[6]}px ${theme.space[10]}px;
    }
    
    ${theme.mediaQueries.mobile} {
      padding: ${theme.space[4]}px ${theme.space[5]}px;
    }
  `};
`;
