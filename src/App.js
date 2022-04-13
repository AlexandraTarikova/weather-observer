import './App.css';
import React, {useState, useEffect} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ObservationPointPage from "./pages/ObservationPointPage/ObservationPointPage";
import ObservationPointsListPage from "./pages/ObservationPointsListPage/ObservationPointsListPage";
import CreateObservation from "./pages/CreateObservation/CreateObservation";
import UnitToggle from "./components/UnitToggle/UnitToggle";

import firebase from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBv2P7LA5EjjCHDtnPdWA3kIjGIO1OjwIo",
  authDomain: "weather-observer.firebaseapp.com",
  databaseURL: "https://weather-observer-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "weather-observer",
  storageBucket: "weather-observer.appspot.com",
  messagingSenderId: "774699861759",
  appId: "1:774699861759:web:46b03f9dbc94e675c3aeca"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database();
import {Wrapper, ToggleWrapper} from './styles';

function App() {
  const [observationPoints, setObservationPoints] = useState([]);
  const [preferredUnit, setPreferredUnit] = useState('C');
  const onUnitToggle = (id) => setPreferredUnit(id);
  useEffect(() => {
    database.ref().child('ObservationPoints').once('value').then((data) => {
      const newArr = [].concat(data.val()).sort((point1, point2) => point1.name < point2.name);
      setObservationPoints(newArr);
    });
  }, []);

  return (
    <div className="App" style={{width: '100vw', padding: '8px'}}>
      <Wrapper>
        <ToggleWrapper><UnitToggle onToggle={onUnitToggle} selected={preferredUnit}/></ToggleWrapper>
        <Routes>
          <Route path="/observations/:id" element={
            <ObservationPointPage
              observationPoints={observationPoints}
              preferredUnit={preferredUnit}
              database={database}
            />
          }/>
          <Route path="/observations" element={
            <ObservationPointsListPage
              observationPoints={observationPoints}
            />
          }/>
          <Route path="/create_observation" element={
            <CreateObservation
              observationPoints={observationPoints}
              preferredUnit={preferredUnit}
              database={database}
            />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;

