import React from "react";
import { ButtonSize, ButtonFill } from "./Button.types";
import * as Styled from "./Button.styled";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  size: ButtonSize;
  fill?: ButtonFill;
}
const Button: React.FC<ButtonProps> = (props) => {
  const { children, fill = "fill", onClick, size } = props;
  return (
    <Styled.Button {...{ fill, onClick, size }}>{children}</Styled.Button>
  );
};

export default Button;
