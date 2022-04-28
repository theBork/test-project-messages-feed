import React from "react";
import { TitleType } from "./Title.types";
import * as Styled from "./Title.styled";

interface TitleProps {
  children: string;
  type: TitleType;
}

const Title: React.FC<TitleProps> = (props) => {
  const { children, type } = props;
  return <Styled.Title {...{ type }}>{children}</Styled.Title>;
};

export default Title;
