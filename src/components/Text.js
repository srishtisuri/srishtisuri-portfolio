import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const sizes = {
  1: "16px",
  2: "18px",
  3: "24px",
  4: "30px",
  5: "36px",
  6: "42px",
  7: "48px",
  8: "54px",
  9: "60px",
};

const weights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const StyledTag = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => sizes[props.size]};
  font-weight: ${(props) => weights[props.weight]};
`;

const Text = ({ size, weight, is, color, children }) => {
  return (
    <StyledTag as={is} size={size} weight={weight} color={color}>
      {children}
    </StyledTag>
  );
};

Text.propTypes = {
  size: PropTypes.number,
  weight: PropTypes.string,
  is: PropTypes.oneOf(["p", "h1", "h2", "h3", "h4", "h5", "h6"]),
  color: PropTypes.string,
};

Text.defaultProps = {
  size: 1,
  weight: "regular",
  is: "p",
  color: "#000",
};

export default Text;
