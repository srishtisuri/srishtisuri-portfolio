import React from "react";
import { cube, srishti, experience, hello, code } from "../assets";
import { StyledH1, StyledImg } from "./styles";
import { StyledLink, Circle, StyledDiv, StyledRoute } from "./Home.styles";

const buttons = [
  {
    label: "experience",
    image: experience,
    iconColor: "#F0EC91",
    alt: "working at laptop",
  },
  {
    label: "kuebik",
    image: cube,
    iconColor: "#F3DB9F",
    alt: "kuebik logo",
  },
  {
    label: "projects",
    image: code,
    iconColor: "#EFB2B2",
    alt: "kuebik logo",
  },
  {
    label: "hello",
    image: hello,
    iconColor: "#D5CAFA",
    alt: "kuebik logo",
  },
];

const Home = () => {
  return (
    <div>
      <StyledImg src={srishti} alt="Srishti" height="240px" />
      <StyledH1>srishti suri</StyledH1>
      <StyledDiv>
        {buttons.map((el) => {
          return (
            <StyledRoute>
              <StyledLink to={`/${el.label}`}>
                <Circle color={el.iconColor}>
                  <img src={el.image} height="35px" alt={el.alt} />
                </Circle>
                {el.label}.
              </StyledLink>
            </StyledRoute>
          );
        })}
      </StyledDiv>
    </div>
  );
};

export default Home;
