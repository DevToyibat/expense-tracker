import React from "react";
import {
  LabelColor,
  LabelContainer,
  LabelLeft,
  LabelName,
  LabelRight,
} from "../styles/LabelStyle";
import { useGetLabelsQuery } from "../reducer/expenseTrackerApi";
import { getLabels } from "../helper/helper";

const Labels = () => {
  const { data, isLoading, isSuccess, isError } = useGetLabelsQuery();

  let Transactions;

  if (isLoading) {
    Transactions = <div>Loading data...</div>;
  }
  if (isSuccess) {
    Transactions = getLabels(data, "type")?.map((v, i) => (
      <LabelContainer key={i}>
        <LabelLeft>
          <LabelColor bg={`${v.color}`} />
          <LabelName>{v.type ?? ""}</LabelName>
        </LabelLeft>
        <LabelRight>{Math.round(v.percent) ?? 0}%</LabelRight>
      </LabelContainer>
    ));
  }

  return (
    <>
      <div>{Transactions}</div>
    </>
  );
};

export default Labels;
