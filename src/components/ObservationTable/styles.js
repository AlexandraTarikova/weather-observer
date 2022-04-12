import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border: none;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  > tr > td:nth-child(3), > tr > th:nth-child(3) {
    text-align: right;
  }
  > tr:nth-child(2n) {
    background: #cccccc;
  }
  > tr:nth-child(2n + 1) {
    background: #eeeeee;
  }
  > tr:nth-child(1) {
    background: none;
  }
  th, td {
    padding: 4px 8px;
  }
`
