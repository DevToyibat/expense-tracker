import styled from "styled-components";

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: clamp(18.75rem, 11.1vw + 16.5rem, 25rem);
  margin-top: 30px;
`;
export const LabelLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const LabelColor = styled.div`
  width: 10px;
  height: 30px;
  background: ${({ bg }) => bg};
  border-radius: 5px;
`;
export const LabelName = styled.div`
  font-size: 18px;
`;
export const LabelRight = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
