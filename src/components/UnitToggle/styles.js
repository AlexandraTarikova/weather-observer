import styled from 'styled-components';

export const Body = styled.div`
  width: 160px;
  height: 60px;
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: stretch;
  background: #aaaaaa;
`

export const Option = styled.div`
  background: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  opacity: ${p => p.selected ? 1 : 0.5};
  cursor: pointer;
`
