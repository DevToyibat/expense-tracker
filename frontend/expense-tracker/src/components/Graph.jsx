import React from "react";
import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import styled from "styled-components";
import {
  GraphContainer,
  GraphData,
  GraphTotal,
  GraphWrapper,
} from "../styles/GraphStyles";
import { useGetLabelsQuery } from "../reducer/expenseTrackerApi";
import { chartData, getTotal } from "../helper/helper";

Chart.register(ArcElement);

const Graph = () => {
  const { data, isLoading, isSuccess, isError } = useGetLabelsQuery();

  let graphData;
  if (isLoading) {
    graphData = <div>Loading data...</div>;
  }
  if (isSuccess) {
    graphData = <Doughnut {...chartData(data)} />;
  }
  if (isError) {
    graphData = <div>Error getting data!</div>;
  }

  return (
    <GraphContainer>
      <GraphWrapper>
        <GraphData>
          {graphData}
          <GraphTotal>
            <div>Total</div>
            <span>N</span>
            <strong>{getTotal(data) ?? 0}</strong>
          </GraphTotal>
        </GraphData>
      </GraphWrapper>
    </GraphContainer>
  );
};

export default Graph;
