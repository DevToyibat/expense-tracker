import React from "react";
import {
  LabelColor,
  LabelContainer,
  LabelLeft,
  LabelName,
  LabelRight,
} from "../styles/LabelStyle";

const Labels = () => {
  return (
    <>
      <div>
        <LabelContainer>
          <LabelLeft>
            <LabelColor />
            <LabelName>Salary</LabelName>
          </LabelLeft>
          <LabelRight>32%</LabelRight>
        </LabelContainer>
      </div>
      <div>
        <LabelContainer>
          <LabelLeft>
            <LabelColor />
            <LabelName>Expense</LabelName>
          </LabelLeft>
          <LabelRight>50%</LabelRight>
        </LabelContainer>
      </div>
      <div>
        <LabelContainer>
          <LabelLeft>
            <LabelColor />
            <LabelName>Investment</LabelName>
          </LabelLeft>
          <LabelRight>66%</LabelRight>
        </LabelContainer>
      </div>
    </>
  );
};

export default Labels;
