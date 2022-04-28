import styled from "styled-components";
import Text from "ui/Text";
import { TitleType } from "./Title.types";

interface TypeProp { type: TitleType }

export const Title = styled(Text).attrs<TypeProp>(({ type }) => ({
  variant: type,
  mb: (type === "h1" && 6) || (type === "h2" && 4) || 2,
}))<TypeProp>``;
