import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border-top: 1px solid #e6e6e6;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledDiv>
      {/* <p>Made with ❤ in Sydney, 2021</p> */}
      <p>Made with ❤ by yours truly</p>
    </StyledDiv>
  );
};

export default Footer;
