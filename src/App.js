import './App.css';
import React, {useState} from 'react';
import { Routes, useParams, Route, Link } from "react-router-dom";
import ObservationPointPlate from "./components/ObservationPointPlate/ObservationPointPlate";
import HomePage from "./pages/HomePage/HomePage";
import CreateObservation from "./pages/CreateObservation/CreateObservation";
import BottomBar from "./components/BottomBar/BottomBar";

const observationPoints = [
  {id: 'Tokio', name: 'Tokio'},
  {id: 'Helsinki', name: 'Helsinki'},
  {id: 'New York', name: 'New York'},
  {id: 'Amsterdam', name: 'Amsterdam'},
  {id: 'Dubai', name: 'Dubai'},
];

const data = {};


const ObservationPointsListPage = (props) => {
  const bottomBarButtons = [
    {type: 'link', text: 'Back', props: {to: '/home'}},
  ];
  return <>
    {
      observationPoints.map((point) =>
        (<Link to={`/observations/${point.id}`}><ObservationPointPlate { ...{expanded: false, ...point}}/></Link>)
      )
    }
    <BottomBar buttons={bottomBarButtons}/>
  </>
}

const ObservationPointPage = (props) => {
  const bottomBarButtons = [
    {type: 'link', text: 'Back', props: {to: '/observations'}},
  ];
  const { id } = useParams();
  return <>
      <BottomBar buttons={bottomBarButtons}/>
      <ObservationPointPlate { ...{expanded: true, ...observationPoints.find(elem => elem.id === id)}}/>
    </>
}

function App() {
  const [preferedUnit, setUnit] = useState('C');
  return (
    <div className="App" style={{width: '100vw', padding: '8px'}}>
      <Routes>
        <Route path="/observations/:id" element={<ObservationPointPage />} />
        <Route path="/observations" element={<ObservationPointsListPage />} />
        <Route path="/create_observation" element={<CreateObservation observationPoints={observationPoints} />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

