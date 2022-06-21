import React, { useState } from 'react';
import styled from 'styled-components';
import BarChartView from './BarChartView';
import LineChartView from './LineChartView';

function makeData(data) {
  const header = data[0];
  const body = data.slice(1, data.length);
  const result = body.map((arr) => {
    const obj = {};
    arr.forEach((elem, index) => {
      if (index === 0) {
        obj['name'] = elem;
      } else obj[header[index]] = elem;
    });

    return obj;
  });

  return result;
}

function DataChart({ data }) {
  const [chartMode, setChartMode] = useState('bar');
  const dataToChart = makeData(data);
  const keys = Object.keys(dataToChart[0]);
  const chartKeys = keys.slice(1, keys.length);
  return (
    <DataChartDiv>
      <StyledH1>Data Chart</StyledH1>
      <div className="buttons">
        <ChartTypeButton
          onClick={() => {
            setChartMode('bar');
          }}
        >
          Bar
        </ChartTypeButton>
        <ChartTypeButton
          onClick={() => {
            setChartMode('line');
          }}
        >
          Line
        </ChartTypeButton>
      </div>
      <DataChartWrap>
        {chartMode === 'bar' && (
          <BarChartView keys={chartKeys} data={dataToChart} />
        )}
        {chartMode === 'line' && (
          <LineChartView keys={chartKeys} data={dataToChart} />
        )}
      </DataChartWrap>
    </DataChartDiv>
  );
}

export default DataChart;

const StyledH1 = styled.h1`
  font-size: 24px;
`;

const DataChartWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const DataChartDiv = styled.div`
  margin: 36px 0;
  min-height: 500px;
`;

const ChartTypeButton = styled.button`
  background: white;
  border: 1px solid #390099;
  color: #390099;
  padding: 4px 8px;
  margin-right: 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #390099;
    color: white;
  }
`;