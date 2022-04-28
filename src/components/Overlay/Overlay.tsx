import React, { MouseEvent, PropsWithChildren } from "react";
import * as Styled from "./Overlay.styled";

interface OverlayProps {
  onClick?: (e?: MouseEvent<HTMLDivElement>) => void;
}
const Overlay: React.FC<PropsWithChildren<OverlayProps>> = (props) => {
  const { children, onClick } = props;
  return <Styled.Overlay {...{ onClick }}>{children}</Styled.Overlay>;
};

export default Overlay;
