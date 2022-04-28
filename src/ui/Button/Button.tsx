import React from "react";
import { ButtonSize, ButtonFill } from "./Button.types";
import * as Styled from "./Button.styled";

interface ButtonProps {
  children: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  size: ButtonSize;
  fill?: ButtonFill;
}
const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, disabled, fill = "fill", onClick, size } = props;
  return (
    <Styled.Button {...{ className, disabled, fill, onClick, size }}>{children}</Styled.Button>
  );
};

export default Button;
