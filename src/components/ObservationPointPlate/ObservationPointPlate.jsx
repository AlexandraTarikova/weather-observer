import React from 'react';

import {Wrapper, SummaryWrapper, TitleColumn, Title, DailyData} from './styles';

const ObservationPointPlate = ({withSummary = false, name, observationSummary = {}}) => {
  return (
    <Wrapper>
      <SummaryWrapper>
        <TitleColumn>
          <Title>{name}</Title>
          {withSummary && <div>{observationSummary.latest || observationSummary.latest === 0 ? `${observationSummary.latest}℃` : 'no data'}</div>}
        </TitleColumn>
        { withSummary &&
          <DailyData>
            <div>max: {observationSummary.max || observationSummary.max === 0 ? `${observationSummary.max}℃` : 'no data'}</div>
            <div>avg: {observationSummary.avg || observationSummary.avg === 0 ? `${observationSummary.avg}℃` : 'no data'}</div>
            <div>min: {observationSummary.min || observationSummary.min === 0 ? `${observationSummary.min}℃` : 'no data'}</div>
          </DailyData>
        }
      </SummaryWrapper>
    </Wrapper>
  )
};

export default ObservationPointPlate;

