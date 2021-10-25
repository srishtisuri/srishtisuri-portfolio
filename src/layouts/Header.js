import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { linkedin, github, spotify } from "../assets";
import { Column } from "../styles";

const Container = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  width: 100%;
  padding: 8px 0;
  font-size: 18px;
  font-weight: 500;
  background-color: rgb(255, 255, 255, 0.72);
  border-bottom: 1px solid #e6e6e6;
  backdrop-filter: blur(20px);
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  margin: 10px;
  text-decoration: none;
  color: #000;
`;

const LogoName = styled.h2`
  margin: 0;
  /* Fallback: Set a background color. */
  background-color: black;

  /* Create the gradient. */
  background: rgb(0, 71, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 71, 255, 1) 0%,
    rgba(0, 195, 11, 1) 100%
  );

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /*  Use the text as a mask for the background.
   *  This will show the gradient as a text color rather than element bg. 
   */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const StyledImg = styled.img`
  margin: 0 3px;
  border-radius: 6px;
  height: 35px;
`;

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <Column flex={1}>
          <LogoLink to="/">
            <LogoName>Srishti Suri</LogoName>
          </LogoLink>
        </Column>
        <Column flex={2}>
          <StyledLink to="/experience">experience</StyledLink>
          <StyledLink to="/kuebik">kuebik</StyledLink>
          <StyledLink to="/blog">blog</StyledLink>
          <StyledLink to="/hello">hello</StyledLink>
        </Column>
        <Column flex={1}>
          <StyledImg src={linkedin} alt="linkedin logo" />
          <StyledImg src={github} alt="github logo" />
          <StyledImg src={spotify} alt="spotify logo" />
        </Column>
      </StyledHeader>
    </Container>
  );
};

export default Header;
