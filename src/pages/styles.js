import styled from "styled-components";
import { queryMax } from "../styles";

export const StyledH1 = styled.h1`
  font-weight: 500;
  font-size: 60px;
  @media ${queryMax.xs} {
    font-size: 54px;
  }
`;

export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 40px;
  @media ${queryMax.xs} {
    font-size: 32px;
  }
`;

export const ContentBox = styled.div`
  background-color: #fff;
  border-radius: 24px;
  padding: 2%;
  margin: 5px;
  flex: ${(props) => props.flex};
`;

export const PageContainer = styled.div`
  padding: 3% 8%;
  flex: 1;
`;
