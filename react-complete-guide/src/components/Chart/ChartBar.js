import React from "react";

// Styled Components
import {
  ChartBar_Wrapper,
  ChartBar_Fill,
  ChartBar_Inner,
  ChartBar_Label,
} from "./style";

export const ChartBar = (props) => {
  
    let barFillHeight = "0%"

    if (props.maxValue > 0) {
        // How much of the bar has to be filled
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
        console.log('cadas');
    }
  
    console.log(props);

    return (
    <ChartBar_Wrapper>
      <ChartBar_Inner>
        <ChartBar_Fill barHeight={barFillHeight}></ChartBar_Fill>
      </ChartBar_Inner>
      <ChartBar_Label>{props.label}</ChartBar_Label>
    </ChartBar_Wrapper>
  );
};
