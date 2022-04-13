import React from 'react';

import {Wrapper, SummaryWrapper, TitleColumn, Title, DailyData} from './styles';

const ObservationPointPlate = ({withSummary = false, name, observationSummary = {}}) => {
  return (
    <Wrapper>
      <SummaryWrapper>
        <TitleColumn>
          <Title>{name}</Title>
          {withSummary && <div>{observationSummary.latest}℃</div>}
        </TitleColumn>
        { withSummary &&
          <DailyData>
            <div>max: {observationSummary.max}℃</div>
            <div>avg: {observationSummary.avg}℃</div>
            <div>min: {observationSummary.min}℃</div>
          </DailyData>
        }
      </SummaryWrapper>
    </Wrapper>
  )
};

export default ObservationPointPlate;

