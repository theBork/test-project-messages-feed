import React from "react";
import { TitleType } from "./Title.types";
import * as Styled from "./Title.styled";

interface TitleProps {
  children: string;
  type: TitleType;
  withoutPadding?: boolean;
}

const Title: React.FC<TitleProps> = (props) => {
  const { children, type, withoutPadding } = props;
  return <Styled.Title {...{ type, withoutPadding }}>{children}</Styled.Title>;
};

export default Title;
