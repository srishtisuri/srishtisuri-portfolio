import React from "react";
import { PageContainer } from "./styles";
import { Text } from "../components";

const Hello = () => {
  return (
    <PageContainer>
      <Text weight="medium" is="h1" size={7}>
        hello
      </Text>
    </PageContainer>
  );
};

export default Hello;
