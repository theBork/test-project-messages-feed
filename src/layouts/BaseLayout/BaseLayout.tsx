import React, { ReactNode } from "react";
import * as Styled from "./BaseLayout.styled";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const { children } = props;
  return <Styled.Layout>{children}</Styled.Layout>;
};

export default BaseLayout;
