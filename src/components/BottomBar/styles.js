import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  display: flex;
  font-size: 24px;
  background: #cccccc;
`

export const ButtonStyled = styled.button`
  width: 100%;
  line-height: 60px;
`
export const LinkStyled = styled(Link)`
  width: 100%;
  line-height: 60px;
`

