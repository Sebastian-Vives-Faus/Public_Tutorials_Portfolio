import React from "react";
import { ChartBar } from "./ChartBar";

// Style
import { Wrapper } from "../UI/ExpenseItem_Style";
import { Chart_Wrapper } from "./style";

export const Chart = (props) => {
  
    // Transform an arr of objects into an arr of a single key of the object of arrays
    const valueArr = props.dataPoints.map(data => parseInt(data.value));
    console.log(valueArr);
    const totalMaximum = Math.max(...valueArr);


    return (
    <Chart_Wrapper>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </Chart_Wrapper>
  );
};
