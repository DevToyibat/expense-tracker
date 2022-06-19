import styled from "styled-components";

export const GraphContainer = styled.div``;
export const GraphWrapper = styled.div``;
export const GraphData = styled.div`
  position: relative;
`;
export const GraphTotal = styled.h3`
  text-align: center;
  position: absolute;
  top: 40%;
  right: 0;
  left: 0;
  margin: 0 auto;

  span {
    text-decoration-line: line-through;
    text-decoration-style: double;
    font-size: 30px;
  }
  strong {
    font-size: 30px;
  }
`;
