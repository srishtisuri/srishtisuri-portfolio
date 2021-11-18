import React from "react";
import PropTypes, { node } from "prop-types";
import styled from "styled-components";
import { Text } from "./index";
import { StyledHr } from "../pages/styles";

const Container = styled.div`
  border-radius: 18px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin: 25px 5px;
  width: 350px;
  min-height: 400px;

  &:hover {
    border: 1px solid #00000050;
    cursor: pointer;
  }
`;

const Image = styled.div`
  min-height: 250px;
  border-radius: 18px 18px 0 0;
  flex: ${(props) => props.flex};
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  max-width: ${(props) => props.width};
`;

const Body = styled.div`
  border-radius: 0 0 18px 18px;
  max-width: ${(props) => props.width};
  background-color: #fff;
  padding: 25px;
  //   min-height: 120px;
  flex: ${(props) => props.flex};
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: black;
`;

const ImageCard = ({ image, title, link, children }) => {
  return (
    <StyledAnchor href={link} target="_blank" rel="noopener noreferrer">
      <Container>
        <Image image={image} />
        <Body>
          <Text is="h2" weight="medium" size={3}>
            {title}
          </Text>
          <StyledHr />
          <Text>{children}</Text>
        </Body>
      </Container>
    </StyledAnchor>
  );
};

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

ImageCard.defaultProps = {
  link: "",
};

export default ImageCard;
