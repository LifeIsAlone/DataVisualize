import React, { useContext } from 'react';
import styled from 'styled-components';
import { ChartContext } from '../store/ChartProvider';

function DataView() {
  const chartCtx = useContext(ChartContext);
  const data = chartCtx.input;

  const header = Object.keys(data[0]);
  return (
    <DataViewDiv>
      <StyledH1>Your Data</StyledH1>
      <DataTableWrap>
        <DataTable>
          <thead>
            <tr>
              {header.map((elem, index) => (
                <td key={'header' + index}>{elem}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              return (
                <tr key={'tbody tr' + index}>
                  {Object.values(row).map((elem, idx) => (
                    <td key={'tr' + index + ' td' + idx}>{elem}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </DataTable>
      </DataTableWrap>
    </DataViewDiv>
  );
}

export default DataView;

const StyledH1 = styled.h1`
  font-size: 1.5rem;
`;

const DataViewDiv = styled.div`
  margin: 2rem 0;
`;

const DataTableWrap = styled.div`
  width: fit-content;
  max-width: 100%;
  max-height: 25rem;
  overflow: scroll;
  font-size: 1rem;
  margin: 0 auto;
`;

const DataTable = styled.table`
  border-spacing: 0px;
  border-collapse: collapse;
  text-align: center;

  & thead {
    background: linear-gradient(135deg, #6411ad 0%, #390099 100%);
    color: white;
  }

  & thead td {
    padding: 0.5em;
  }

  & td {
    padding: 0.25em 2em;
  }

  & tr {
    border-bottom: 1px solid #390099;
  }
`;
