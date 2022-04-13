import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import BottomBar from "../../components/BottomBar/BottomBar";
import ObservationPointPlate from "../../components/ObservationPointPlate/ObservationPointPlate";
import ObservationTable from "../../components/ObservationTable/ObservationTable";
import {TableWrapper} from "./styles";


const ObservationPointPage = ({database, observationPoints = [], observationSummary = {}}) => {
  const { id } = useParams();
  const [observations, setObservations] = useState([]);
  const [summary, setSummary] = useState({});
  useEffect(() => {
    database.ref().child('Observations').child(id).once('value').then((data) => {
      const newObservations = [];
      const recentObservations = [];
      const obj = data.val();
      const timeStampNow = Math.round(new Date().getTime() / 1000);
      const timeStampYesterday = timeStampNow - (24 * 3600);
      for (const key in obj){
        const observation = obj[key];
        newObservations.push(observation)
        const then = new Date(observation.time);
        const isRecent = then >= new Date(timeStampYesterday*1000).getTime();
        if (isRecent && !isNaN(observation.temp)) {
          recentObservations.push(observation.temp);
        }
      }
      newObservations.sort((observation1, observation2) => (new Date(observation1.time)) - (new Date(observation2.time)))
      setObservations(newObservations);
      setSummary({
        latest: newObservations[0].temp,
        max: Math.max(...recentObservations),
        avg: Math.round(recentObservations.reduce((a,b) => a + b, 0) / recentObservations.length),
        min: Math.min(...recentObservations),
      });
    });
  }, []);
  const bottomBarButtons = [
    {type: 'link', text: 'Back', props: {to: '/observations'}},
  ];
  return <>
    <BottomBar buttons={bottomBarButtons}/>
    <ObservationPointPlate
      { ...{
        withSummary: true,
        observationSummary: summary,
        observations: [].concat(observations).reverse(),
        ...observationPoints.find(elem => elem.id === id)
      }}
    />
    <TableWrapper><ObservationTable observations={observations}/></TableWrapper>
  </>
}

export default ObservationPointPage;
