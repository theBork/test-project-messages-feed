import React from "react";
import { TabItem } from "components/Tabs/Tabs.types";
import * as Styled from "./Tabs.styled";

interface TabsProps<T extends string = string> {
  activeItem: T;
  items: TabItem<T>[];
}

function Tabs<T extends string = string>(props: TabsProps<T>) {
  const { activeItem, items } = props;
  return (
    <Styled.Wrapper>
      {items.map(tab => (
        <Styled.TabButton key={tab.value} size="s" isActive={tab.value === activeItem} onClick={tab.onClick}>
          {tab.title || tab.value}
        </Styled.TabButton>
      ))}
    </Styled.Wrapper>
  );
}

export default Tabs;
