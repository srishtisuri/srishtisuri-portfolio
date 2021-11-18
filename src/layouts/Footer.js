import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
  text-align: center;
  height: 54px;
`;

const Footer = () => {
  return (
    <Container>
      <footer>
        <p>Made with ❤ by yours truly</p>
      </footer>
    </Container>
  );
};

export default Footer;
