import {Link} from "react-router-dom";
import ObservationPointPlate from "../../components/ObservationPointPlate/ObservationPointPlate";
import BottomBar from "../../components/BottomBar/BottomBar";
import React from "react";
import {Wrapper} from "./styles";

const ObservationPointsListPage = ({observationPoints = []}) => {
  const bottomBarButtons = [
    {type: 'link', text: 'Back', props: {to: '/home'}},
  ];
  return <Wrapper>
    {
      observationPoints.map((point) =>
        (<Link to={`/observations/${point.id}`} key={point.id} >
          <ObservationPointPlate { ...{withSummary: false, ...point}}/>
        </Link>))
    }
    <BottomBar buttons={bottomBarButtons}/>
  </Wrapper>
}

export default ObservationPointsListPage;
