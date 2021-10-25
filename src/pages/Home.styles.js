import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const ButtonStrip = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 50px;
`;

export const StyledRoute = styled.div`
  width: 160px;
`;

export const Circle = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 999px;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  color: #000;
  font-size: 28px;
  font-weight: 600;
  margin: auto;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const StyledImg = styled.img`
  border-radius: 24px;
  height: 240px;
`;
