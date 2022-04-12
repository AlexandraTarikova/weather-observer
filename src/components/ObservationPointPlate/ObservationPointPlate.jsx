import React from 'react';

import {Wrapper, SummaryWrapper, TitleColumn, Title, DailyData, TableWrapper} from './styles';
import ObservationTable from "../ObservationTable/ObservationTable";

const ObservationPointPlate = (props) => {
  console.log(props);
  return (
    <Wrapper>
      <SummaryWrapper>
        <TitleColumn>
          <Title>{props.name}</Title>
          <div>{props.observation?.latest}℃</div>
        </TitleColumn>
        <DailyData>
          <div>max: {props.observation?.max}℃</div>
          <div>avg: {props.observation?.avg}℃</div>
          <div>min: {props.observation?.min}℃</div>
        </DailyData>
      </SummaryWrapper>
      {
        props.expanded && <TableWrapper><ObservationTable /></TableWrapper>
      }
    </Wrapper>
  )
};

export default ObservationPointPlate;

ObservationPointPlate.defaultProps = {
  expanded: true,
  name: 'Moscow',
  observation: {
    latest: 20,
    max: 30,
    avg: 23,
    min: 20,
  }
};
