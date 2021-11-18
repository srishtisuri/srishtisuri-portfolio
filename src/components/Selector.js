import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import Text from "./Text";

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const moveRight = keyframes`
  from {
    left: 0px;
  }
  to {
    left: 12px;
  } 
`;

const StyledSelector = styled.div`
  border-bottom: 1px solid black;
  padding: 12px;
  cursor: pointer;
  transition: all 5s ease;

  &:hover #right-arrow {
    position: relative;
    animation: ${moveRight} 0.5s;
    animation-fill-mode: forwards;
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: black;
`;

const Selector = ({ title, subtitle, icon, link }) => {
  return (
    <StyledAnchor href={link} target="_blank" rel="noopener noreferrer">
      <StyledSelector>
        <FlexDiv>
          <Text is="h2" weight="medium" size={3}>
            {title}
          </Text>
          {icon && (
            <img
              id="right-arrow"
              src={icon}
              width="35px"
              height="35px"
              alt="arrow icon"
            />
          )}
        </FlexDiv>
        <Text>{subtitle}</Text>
      </StyledSelector>
    </StyledAnchor>
  );
};

Selector.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Selector.defaultProps = {
  icon: null,
};

export default Selector;
