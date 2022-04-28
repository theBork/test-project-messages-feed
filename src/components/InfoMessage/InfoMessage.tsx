import React from "react";
import * as Styled from "./InfoMessage.styled";

interface InfoMessageProps {
  text: string;
}

const InfoMessage: React.FC<InfoMessageProps> = (props) => {
  const { text } = props;
  return <Styled.InfoMessage>{text}</Styled.InfoMessage>;
};

export default InfoMessage;
