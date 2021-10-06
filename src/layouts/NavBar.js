import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const StyledLink = styled(Link)`
  margin: 10px;
  text-decoration: none;
  color: #000;
`;

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const NavBar = () => {
  const page = useParams().page || "home";

  return (
    <StyledDiv>
      <StyledLink to="/" selected={page === ""}>
        home
      </StyledLink>
      <StyledLink to="/experience" selected={page === "experience"}>
        experience
      </StyledLink>
      <StyledLink to="/kuebik" selected={page === "kuebik"}>
        kuebik
      </StyledLink>
      <StyledLink to="/projects">projects</StyledLink>
      <StyledLink to="/hello">hello</StyledLink>
    </StyledDiv>
  );
};

export default NavBar;
