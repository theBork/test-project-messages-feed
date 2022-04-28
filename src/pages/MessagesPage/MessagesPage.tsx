import React from "react";
import { RouteComponentProps } from "@reach/router";
import BaseLayout from "../../layouts/BaseLayout";
import Messages from "../../containters/Messages";

const MessagesPage: React.FC<RouteComponentProps> = () => (
  <BaseLayout>
    <Messages />
  </BaseLayout>
);

export default MessagesPage;
