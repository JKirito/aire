import React from "react";
import { Doughnut } from "react-chartjs-2";

function Chart() {
  const data = {
    labels: ["Yes", "No"],
    datasets: [
      {
        data: [1, 1, 1],
        label: ["Y", "N"],
        backgroundColor: ["grey", "red", "grey"]
      }
    ]
  };

  return (
    <div className='res-chart-container'>
      <div className='align-center'>
        <Doughnut
          data={data}
          width={400}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}
export default Chart;
