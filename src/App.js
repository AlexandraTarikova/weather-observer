import './App.css';
import React, {useState, useEffect} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ObservationPointPage from "./pages/ObservationPointPage/ObservationPointPage";
import ObservationPointsListPage from "./pages/ObservationPointsListPage/ObservationPointsListPage";
import CreateObservation from "./pages/CreateObservation/CreateObservation";

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

function App() {
  const [observationPoints, setObservationPoints] = useState([]);
  const [observationSummary, setObservationSummary] = useState({});
  useEffect(() => {
    database.ref().child('ObservationPoints').once('value').then((data) => {
      setObservationPoints(data.val());
    });
    database.ref().child('ObservationSummary').once('value').then((data) => {
      setObservationSummary(data.val());
    });
  }, []);

  return (
    <div className="App" style={{width: '100vw', padding: '8px'}}>
      <Routes>
        <Route path="/observations/:id" element={
          <ObservationPointPage
            observationPoints={observationPoints}
            observationSummary={observationSummary}
            database={database}
          />
        }/>
        <Route path="/observations" element={
          <ObservationPointsListPage
            observationPoints={observationPoints}
            observationSummary={observationSummary}
          />
        }/>
        <Route path="/create_observation" element={<CreateObservation database={database} observationPoints={observationPoints} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;

