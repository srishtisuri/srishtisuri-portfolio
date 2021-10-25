import styled from "styled-components";

export const queryMax = {
  xs: `(max-width: 576px)`,
  sm: `(max-width: 768px)`,
  md: `(max-width: 992px)`,
  lg: `(max-width: 1200px)`,
};

export const queryMin = {
  xs: `(min-width: 576px)`,
  sm: `(min-width: 768px)`,
  md: `(min-width: 992px)`,
  lg: `(min-width: 1200px)`,
};

export const MainContainer = styled.div`
  // position: relative;
  min-height: calc(100vh - 54px);
  background-color: #f7f7f7;
  display: flex;
  flex: 1 1 0;
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${(props) => props.flex};
`;
