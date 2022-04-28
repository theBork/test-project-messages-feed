import styled from "styled-components";
import { space } from "styled-system";
import AuthorInfoComponent from "components/AuthorInfo";
import Button from "ui/Button";

export const BackButton = styled(Button).attrs({
  mb: 4,
})(space);

export const AuthorInfo = styled(AuthorInfoComponent).attrs({
  mb: 10,
})(space);
