import React from "react";
import styled from "styled-components";
import { StyledH1, StyledH2, ContentBox, PageContainer } from "./styles";

const FlexDiv = styled.div`
  display: flex;
`;

const Experience = () => {
  return (
    <PageContainer>
      <StyledH1>experience</StyledH1>
      <FlexDiv>
        <ContentBox flex={1}>
          <StyledH2>Westpac</StyledH2>
        </ContentBox>
        <ContentBox flex={1}>
          <StyledH2>Macquarie</StyledH2>
        </ContentBox>
      </FlexDiv>
      <FlexDiv>
        <ContentBox flex={1}>
          <StyledH2>IBM iX</StyledH2>
        </ContentBox>
        <ContentBox flex={1}>
          <StyledH2>UTS</StyledH2>
        </ContentBox>
      </FlexDiv>
    </PageContainer>
  );
};

export default Experience;
