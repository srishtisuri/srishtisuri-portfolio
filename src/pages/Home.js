import React from "react";
import { cube, srishti, experience, hello, book } from "../assets";
import { Text } from "../components";
import {
  Container,
  StyledLink,
  Circle,
  StyledRoute,
  StyledImg,
  ButtonStrip,
} from "./Home.styles";

const buttons = [
  {
    label: "experience",
    image: experience,
    iconColor: "#F0EC91",
    alt: "working at laptop",
  },
  {
    label: "blog",
    image: book,
    iconColor: "#F3DB9F",
    alt: "book",
  },
  {
    label: "kuebik",
    image: cube,
    iconColor: "#EFB2B2",
    alt: "kuebik logo",
  },
  {
    label: "hello",
    image: hello,
    iconColor: "#D5CAFA",
    alt: "kuebik logo",
  },
  // {
  //   label: "projects",
  //   image: code,
  //   iconColor: "#c4f4ff",
  //   alt: "kuebik logo",
  // },
];

const Home = () => {
  return (
    <Container className="home">
      <StyledImg src={srishti} alt="Srishti" height="240px" />
      <Text weight="medium" is="h1" size={9}>
        srishti suri
      </Text>
      <ButtonStrip>
        {buttons.map((el, index) => {
          return (
            <StyledRoute key={index}>
              <StyledLink to={`/${el.label}`}>
                <Circle color={el.iconColor}>
                  <img src={el.image} height="35px" alt={el.alt} />
                </Circle>
                {el.label}.
              </StyledLink>
            </StyledRoute>
          );
        })}
      </ButtonStrip>
    </Container>
  );
};

export default Home;
