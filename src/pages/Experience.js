import React from "react";
import styled from "styled-components";
import { ContentBox, PageContainer, ImageBox, StyledHr } from "./styles";
import { Text } from "../components";
import {
  utsBuilding,
  jsLogo,
  atlassianLogo,
  gitLogo,
  vscodeLogo,
} from "../assets";
import { jobs } from "../data/jobs";

const FlexBoxCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  padding-right: 10px;
`;

const Description = styled.div`
  border-left: 1px solid #000;
  margin-left: 15px;
  padding: 0 20px 10px;
`;

const PaddingDiv = styled.div`
  padding: 20px;
`;

const JobWidget = ({ logo, alt, role, date, description }) => (
  <>
    <FlexBoxCenter>
      <Logo src={logo} height={35} alt={alt} />
      <Text is="h2" weight="medium" size={2}>
        {role}
      </Text>
    </FlexBoxCenter>
    <Description>
      <Text weight="medium">{date}</Text>
      {description}
    </Description>
  </>
);

const ExperienceSection = () => (
  <section>
    <Text weight="medium" is="h1" size={7}>
      experience
    </Text>
    <FlexBox>
      <ContentBox flex={1}>
        {jobs
          .filter((job, index) => index < 3)
          .map((job, index) => {
            return (
              <JobWidget
                key={index}
                logo={job.logo}
                alt={job.alt}
                role={job.role}
                date={job.date}
                description={job.description}
              />
            );
          })}
      </ContentBox>
      <ContentBox flex={1}>
        {jobs
          .filter((job, index) => index >= 3)
          .map((job, index) => {
            return (
              <JobWidget
                key={index}
                logo={job.logo}
                alt={job.alt}
                role={job.role}
                date={job.date}
                description={job.description}
              />
            );
          })}
      </ContentBox>
    </FlexBox>
  </section>
);

const QualificationsSection = () => (
  <section>
    <Text weight="medium" is="h1" size={7}>
      qualifications
    </Text>
    <FlexBox>
      <ImageBox flex={1} image={utsBuilding} />
      <ContentBox flex={1}>
        <PaddingDiv>
          <Text weight="medium" is="h2" size={3}>
            Bachelor.IT Co-Operative Scholarship
          </Text>
          <Text size={2}>2017 - 2019</Text>
          <StyledHr />
          <Text size={2}>University of Technology, Sydney</Text>
        </PaddingDiv>
      </ContentBox>
    </FlexBox>
  </section>
);

const SkillsSection = () => (
  <section>
    <Text weight="medium" is="h1" size={7}>
      skills
    </Text>
    <FlexBox>
      <ContentBox flex="1 1 100%" width="200px">
        <Text weight="medium" is="h2" size={3}>
          Development
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </ContentBox>
      <ImageBox
        flex="1 1 100%"
        image={jsLogo}
        width="200px"
        position="center"
      />
      <ContentBox flex="1 1 100%" width="200px" position="center">
        <Text weight="medium" is="h2" size={3}>
          Testing
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </ContentBox>
      <ImageBox
        flex="1 1 100%"
        image={atlassianLogo}
        width="200px"
        position="center"
      />
      <ContentBox flex="1 1 100%" width="200px" position="center">
        <Text weight="medium" is="h2" size={3}>
          CI/CD
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </ContentBox>
      <ImageBox
        flex="1 1 100%"
        image={gitLogo}
        width="200px"
        position="center"
      />
      <ContentBox flex="1 1 100%" width="200px" position="center">
        <Text weight="medium" is="h2" size={3}>
          Leadership
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </ContentBox>
      <ImageBox
        flex="1 1 100%"
        image={vscodeLogo}
        width="200px"
        position="center"
      />
      <ContentBox flex="1 1 100%" width="200px" position="center">
        <Text weight="medium" is="h2" size={3}>
          Mentoring
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </ContentBox>
    </FlexBox>
  </section>
);

const Experience = () => {
  return (
    <PageContainer>
      <ExperienceSection />
      <QualificationsSection />
      <SkillsSection />
    </PageContainer>
  );
};

export default Experience;
