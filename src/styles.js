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

export const StyledH1 = styled.h1`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 60px;
  @media ${queryMax.xs} {
    font-size: 54px;
  }
`;

export const StyledH2 = styled.h2`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 40px;
  @media ${queryMax.xs} {
    font-size: 32px;
  }
`;

export const StyledH3 = styled.h3`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 36px;
  @media ${queryMax.xs} {
    font-size: 24px;
  }
`;
export const StyledH4 = styled.h4`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 28px;
  margin-bottom: 0;
  @media ${queryMax.xs} {
    font-size: 24px;
  }
`;
