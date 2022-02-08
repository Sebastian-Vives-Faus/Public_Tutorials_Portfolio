import styled from "styled-components";

export const Chart_Wrapper = styled.section`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

export const ChartBar_Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChartBar_Inner = styled.section`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ChartBar_Fill = styled.section`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
  height: ${props => props.barHeight};
`;

export const ChartBar_Label = styled.section`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;
