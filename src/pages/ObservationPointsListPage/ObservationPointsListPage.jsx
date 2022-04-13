import {Link} from "react-router-dom";
import ObservationPointPlate from "../../components/ObservationPointPlate/ObservationPointPlate";
import BottomBar from "../../components/BottomBar/BottomBar";
import React from "react";

const ObservationPointsListPage = ({observationPoints = [], observationSummary = {}}) => {
  const bottomBarButtons = [
    {type: 'link', text: 'Back', props: {to: '/home'}},
  ];
  return <>
    {
      observationPoints.map((point) =>
        (<Link to={`/observations/${point.id}`} key={point.id} >
          <ObservationPointPlate { ...{expanded: false, observationSummary: observationSummary[point.id], ...point}}/>
        </Link>))
    }
    <BottomBar buttons={bottomBarButtons}/>
  </>
}

export default ObservationPointsListPage;
