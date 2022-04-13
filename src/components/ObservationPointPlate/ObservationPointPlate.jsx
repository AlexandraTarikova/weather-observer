import React from 'react';

import {Wrapper, SummaryWrapper, TitleColumn, Title, DailyData} from './styles';
import {trasformUnits, getUnitSymbol} from '../../utils';

const ObservationPointPlate = ({withSummary = false, preferredUnit = 'C', name, observationSummary = {}}) => {
  const summaryTransformed = {};
  if (preferredUnit === 'C'){
    summaryTransformed.latest = observationSummary.latest;
    summaryTransformed.max = observationSummary.max;
    summaryTransformed.avg = observationSummary.avg;
    summaryTransformed.min = observationSummary.min;
  } else {
    summaryTransformed.latest = trasformUnits({num: observationSummary.latest, to: preferredUnit});
    summaryTransformed.max = trasformUnits({num: observationSummary.max, to: preferredUnit});
    summaryTransformed.avg = trasformUnits({num: observationSummary.avg, to: preferredUnit});
    summaryTransformed.min = trasformUnits({num: observationSummary.min, to: preferredUnit});
  }
  return (
    <Wrapper>
      <SummaryWrapper>
        <TitleColumn>
          <Title>{name}</Title>
          {withSummary && <div>{summaryTransformed.latest || summaryTransformed.latest === 0 ? `${summaryTransformed.latest}${getUnitSymbol(preferredUnit)}` : 'no data'}</div>}
        </TitleColumn>
        { withSummary &&
          <DailyData>
            <div>max: {summaryTransformed.max || summaryTransformed.max === 0 ? `${summaryTransformed.max}${getUnitSymbol(preferredUnit)}` : 'no data'}</div>
            <div>avg: {summaryTransformed.avg || summaryTransformed.avg === 0 ? `${summaryTransformed.avg}${getUnitSymbol(preferredUnit)}` : 'no data'}</div>
            <div>min: {summaryTransformed.min || summaryTransformed.min === 0 ? `${summaryTransformed.min}${getUnitSymbol(preferredUnit)}` : 'no data'}</div>
          </DailyData>
        }
      </SummaryWrapper>
    </Wrapper>
  )
};

export default ObservationPointPlate;

