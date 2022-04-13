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
          <div>{props.observationSummary?.latest}℃</div>
        </TitleColumn>
        <DailyData>
          <div>max: {props.observationSummary?.max}℃</div>
          <div>avg: {props.observationSummary?.avg}℃</div>
          <div>min: {props.observationSummary?.min}℃</div>
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
  expanded: false,
};
