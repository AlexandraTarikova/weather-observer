import './App.css';
import React, {useState, useEffect} from 'react';
import {Routes, useParams, Route, Link, Navigate} from "react-router-dom";
import ObservationPointPlate from "./components/ObservationPointPlate/ObservationPointPlate";
import HomePage from "./pages/HomePage/HomePage";
import CreateObservation from "./pages/CreateObservation/CreateObservation";
import BottomBar from "./components/BottomBar/BottomBar";

// const observationPoints = [
//   {id: 'Tokio', name: 'Tokio'},
//   {id: 'Helsinki', name: 'Helsinki'},
//   {id: 'New York', name: 'New York'},
//   {id: 'Amsterdam', name: 'Amsterdam'},
//   {id: 'Dubai', name: 'Dubai'},
// ];

const data = {};
const url = 'weather-observer.herokuapp.com';
//const url = 'localhost:3000';

const ObservationPointsListPage = ({observationPoints = [], observationSummary = {}}) => {
  console.log('---ObservationPointsListPage observationSummary: ', observationSummary);
  const bottomBarButtons = [
    {type: 'link', text: 'Back', props: {to: '/home'}},
  ];
  return <>
    {
      observationPoints.map((point) =>
        (<Link to={`/observations/${point.id}`}>
          <ObservationPointPlate { ...{expanded: false, observationSummary: observationSummary[point.id], ...point}}/>
        </Link>))
    }
    <BottomBar buttons={bottomBarButtons}/>
  </>
}

const ObservationPointPage = ({observationPoints = [], observationSummary = {}}) => {
  console.log('---ObservationPointPage observationSummary: ', observationSummary);
  const bottomBarButtons = [
    {type: 'link', text: 'Back', props: {to: '/observations'}},
  ];
  const { id } = useParams();
  return <>
      <BottomBar buttons={bottomBarButtons}/>
      <ObservationPointPlate { ...{expanded: true, observationSummary: observationSummary[id], ...observationPoints.find(elem => elem.id === id)}}/>
    </>
}

function App() {
  const [preferedUnit, setUnit] = useState('C');
  const [observationPoints, setObservationPoints] = useState([]);
  const [observationSummary, setObservationSummary] = useState({});
  console.log('---App observationSummary: ', observationSummary);
  console.log('---App observationPoints: ', observationPoints);
  useEffect(() => {
    fetch(`http://${url}/observationPoints`)
      .then(response => response.json())
      .then(data =>
      {
        console.log('get observationPoints: ');
        console.log(data);
        setObservationPoints(data.data);
      });
    fetch(`http://${url}/observationSummary`)
      .then(response => response.json())
      .then(data =>
      {
        console.log('get observationSummary:');
        console.log(data);
        setObservationSummary(data);
      });
  }, []); //

  return (
    <div className="App" style={{width: '100vw', padding: '8px'}}>
      <Routes>
        <Route path="/observations/:id" element={
          <ObservationPointPage
            observationPoints={observationPoints}
            observationSummary={observationSummary}
          />
        }/>
        <Route path="/observations" element={
          <ObservationPointsListPage
            observationPoints={observationPoints}
            observationSummary={observationSummary}
          />
        }/>
        <Route path="/create_observation" element={<CreateObservation observationPoints={observationPoints} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;

