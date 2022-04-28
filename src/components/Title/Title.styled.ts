import styled from "styled-components";
import Text from "ui/Text";
import { TitleType } from "./Title.types";

interface TitleProps {
  type: TitleType;
  withoutPadding?: boolean;
}

export const Title = styled(Text).attrs<TitleProps>(({ type, withoutPadding }) => ({
  variant: type,
  mb: !withoutPadding
    ? (type === "h1" && 6) || (type === "h2" && 4) || 2
    : undefined,
}))<TitleProps>``;
