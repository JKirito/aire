import React from "react";
import Chart from "../Charts/Chart";

function PollContent(props) {
  return (
    <div>
      <h1>Poll Content {props.hostname}</h1>
      <div className='chart-container'>
        <Chart />
      </div>
    </div>
  );
}

export default PollContent;
