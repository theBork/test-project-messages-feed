import React from "react";
import { RouteComponentProps } from "@reach/router";
import BaseLayout from "layouts/BaseLayout";
import Author from "containers/Author";

const AuthorPage: React.FC<RouteComponentProps> = () => (
  <BaseLayout>
    <Author />
  </BaseLayout>
);

export default AuthorPage;
