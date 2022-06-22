import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const TitleHolder = styled.div`
  padding: 0 50px;
  background-color: teal;
  color: whitesmoke;
  padding: 10px 0;
  text-transform: uppercase;
  margin-bottom: 20px;

  h1 {
    text-align: center;
  }
`;
export const ContentHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding: 0 30px;
`;
export const ContentLeft = styled.div`
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
  // background-color: blue;
  padding: 10px 15px;
  align-items: center;
  flex-direction: column;
`;
export const Chart = styled.div``;
export const Percentage = styled.div``;
export const ContentRight = styled.div`
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background-color: red;
  padding: 10px 15px;

  h1 {
    text-align: center;
    margin: 15px 0;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;
export const FormInput = styled.input`
  width: clamp(18.75rem, 11.1vw + 16.5rem, 25rem);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  border: 1px solid grey;
`;

export const FormButton = styled.button`
  width: clamp(18.75rem, 11.1vw + 16.5rem, 25rem);
  background-color: crimson;
  color: white;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  font-size: 17px;
  font-weight: 600;
  border: 0;
  outline: none;
  margin-top: 10px;
  cursor: pointer;
//   transition: all 350ms ease;
transition: all 350ms;
:hover{
    transform: scale(0.97);
}


//   &:active {
//     transform: scale(0.97);
  }
`;

export const SelectInput = styled.select`
  width: clamp(18.75rem, 11.1vw + 16.5rem, 25rem);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  outline: none;
`;
export const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const HistoryBox = styled.div`
  width: clamp(18.75rem, 11.1vw + 16.5rem, 25rem);
  display: flex;
  // justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-right: ${({ brt }) => brt};
  border-radius: 5px;
  box-shadow: -1px 2px 10px -1px rgba(0, 0, 0, 0.51);
  -webkit-box-shadow: -1px 2px 10px -1px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: -1px 2px 10px -1px rgba(0, 0, 0, 0.51);
`;
export const Icon = styled.button`
  font-size: 20px;
  color: #c43095;
  cursor: pointer;
  border: none;
  outline: none;
  // justify-self: flex-start;
`;
export const HistoryDesc = styled.div`
  // display: flex;
  // justify-self: center;
  // text-align: center;
  font-size: 16px;
`;
