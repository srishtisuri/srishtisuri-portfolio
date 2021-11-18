import React from "react";
import { PageContainer } from "./styles";
import { Text } from "../components";

const Blog = () => {
  return (
    <PageContainer>
      <Text weight="medium" is="h1" size={7}>
        blog
      </Text>
    </PageContainer>
  );
};

export default Blog;
