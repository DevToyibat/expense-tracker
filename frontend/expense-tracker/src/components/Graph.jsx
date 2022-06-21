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

Chart.register(ArcElement);

const Graph = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",

        // you add extra data e.g 200 and add extra rgb to add extra chart i.e 4 different chart colors
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
        borderRadius: 30,
        spacing: 10,
        cutout: 115,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
  };

  return (
    <GraphContainer>
      <GraphWrapper>
        <GraphData>
          <Doughnut {...config} />
          <GraphTotal>
            <div>Total</div>
            <span>N</span>
            <strong>20,000</strong>
          </GraphTotal>
        </GraphData>
      </GraphWrapper>
    </GraphContainer>
  );
};

export default Graph;
