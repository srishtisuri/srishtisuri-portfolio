import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { StyledH4 } from "../styles";

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const push = (angle) => keyframes`
  from {
    left: 0px;
  }
  to {
    left: 10px;
    transform: rotate(${angle});
  } 
`;

const StyledDetails = styled.details`
  border-bottom: 1px solid black;
  padding: 12px;
  transition: all 5s ease;

  &:hover img {
    position: relative;
    animation: ${(props) => push(props.angle)} 0.7s;
    animation-fill-mode: forwards;
  }
`;

const StyledSummary = styled.summary`
  list-style: none;
  cursor: pointer;
`;

const Accordion = ({ icon, title, summary, isOpen, children }) => {
  return (
    <StyledDetails>
      <StyledSummary>
        <FlexDiv>
          <StyledH4>{title}</StyledH4>
          {icon && (
            <img src={icon} width="35px" height="35px" alt="arrow icon" />
          )}
        </FlexDiv>
        {summary && <p>{summary}</p>}
      </StyledSummary>
      {children}
    </StyledDetails>
  );
};

Accordion.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
};

Accordion.defaultProps = {
  icon: null,
  summary: "",
  open: false,
};

export default Accordion;
