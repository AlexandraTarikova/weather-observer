import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 8px;
  margin: 8px 0;
`

export const SummaryWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 8px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TitleColumn = styled(Column)`
  text-align: left;
  font-size: 36px;
`

export const DailyData = styled(Column)`
  font-size: 20px;
`

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
`

