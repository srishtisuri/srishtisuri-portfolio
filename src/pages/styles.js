import styled from "styled-components";

export const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #00000021;
`;

export const ContentBox = styled.div`
  max-width: ${(props) => props.width};
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 18px;
  padding: 25px;
  min-height: 120px;
  margin: 25px 5px;
  flex: ${(props) => props.flex};

  &:hover {
    border: 1px solid #00000050;
  }
`;

export const ImageBox = styled.div`
  min-height: 120px;
  border: 1px solid #e6e6e6;
  border-radius: 18px;
  padding: 25px;
  margin: 25px 5px;
  flex: ${(props) => props.flex};
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${(props) => props.position || `auto;`};
  max-width: ${(props) => props.width};

  &:hover {
    border: 1px solid #00000050;
  }
`;

export const PageContainer = styled.div`
  padding: 64px 8%;
  flex: 1;
`;
