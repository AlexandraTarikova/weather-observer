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
  @media screen and (min-width: 576px) {
    position: relative;
    margin: 16px auto;
    width: auto;
  }
`

export const ButtonStyled = styled.button`
  width: 100%;
  line-height: 60px;
  border: 1px solid black;
  padding: 0 32px;
  :disabled {
    opacity: 0.1;
    pointer-events: none;
  }
`
export const LinkStyled = styled(Link)`
  width: 100%;
  line-height: 60px;
  border: 1px solid black;
  padding: 0 32px;
`

