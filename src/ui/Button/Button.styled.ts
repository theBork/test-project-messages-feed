import styled, { css } from "styled-components";
import { space } from "styled-system";
import Text from "ui/Text";
import { ButtonSize, ButtonFill } from "./Button.types";

interface ButtonProps {
  size: ButtonSize;
  fill: ButtonFill;
}

export const Button = styled(Text).attrs<ButtonProps>(({ size }) => ({
  variant: size === "s" ? "body2Regular" : "body1Regular",
  p: size === "s" ? 2 : 3,
  as: "button",
}))<ButtonProps>`
  ${space};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.6;
  }
  
  ${({ theme, fill }) => {
    switch (fill) {
      case "transparent": return css`
        background-color: transparent;
        border: 1px solid transparent;
        color: ${theme.colors.buttonPrimary};
      `;

      case "outline": return css`
        background-color: transparent;
        border: 1px solid ${theme.colors.buttonPrimary};
        color: ${theme.colors.buttonPrimary};
      `;

      case "fill": default: return css`
        background-color: ${theme.colors.buttonPrimary};
        border: 1px solid ${theme.colors.buttonPrimary};
        color: ${theme.colors.simpleWhite};
      `;
    }
  }};
`;
