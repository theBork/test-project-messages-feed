import React from "react";
import { AuthorInfo as IAuthorInfo } from "api/types";
import * as Styled from "./AuthorInfo.styled";

interface AuthorInfoProps extends IAuthorInfo {
  className?: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = (props) => {
  const { className, description, firstName, lastName, nick } = props;

  return (
    <Styled.Wrapper {...{ className }}>
      <Styled.InfoRow>
        <Styled.InfoLabel>Прозвище</Styled.InfoLabel>
        <Styled.InfoValue>{nick}</Styled.InfoValue>
      </Styled.InfoRow>
      <Styled.InfoRow>
        <Styled.InfoLabel>Имя</Styled.InfoLabel>
        <Styled.InfoValue>{firstName}</Styled.InfoValue>
      </Styled.InfoRow>
      <Styled.InfoRow>
        <Styled.InfoLabel>Фамилия</Styled.InfoLabel>
        <Styled.InfoValue>{lastName}</Styled.InfoValue>
      </Styled.InfoRow>
      <Styled.InfoRow>
        <Styled.InfoLabel>Описание</Styled.InfoLabel>
        <Styled.InfoValue>{description}</Styled.InfoValue>
      </Styled.InfoRow>
    </Styled.Wrapper>
  );
};

export default AuthorInfo;
