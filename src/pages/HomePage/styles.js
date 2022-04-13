import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Plate = styled(Link)`
  width: 100%;
  height: 160px;
  margin: 8px 0;
  font-size: 36px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`
