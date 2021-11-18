import React from "react";
import { PageContainer } from "./styles";
import { Text, ImageCard } from "../components";
import styled from "styled-components";
import { projects } from "../data/projects";

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Kuebik = () => {
  return (
    <PageContainer>
      <Text weight="medium" is="h1" size={7}>
        kuebik
      </Text>
      <FlexBox>
        {projects.map((proj, index) => {
          return (
            <ImageCard
              key={index}
              title={proj.title}
              link={proj.link}
              image={proj.image}
            >
              {proj.subtitle}
            </ImageCard>
          );
        })}
      </FlexBox>
    </PageContainer>
  );
};

export default Kuebik;
