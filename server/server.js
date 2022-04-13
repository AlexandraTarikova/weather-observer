const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log('Server is up!');
});

const observationPoints = {
  data: [
    {id: 'Tokio', name: 'Tokio'},
    {id: 'Helsinki', name: 'Helsinki'},
    {id: 'New York', name: 'New York'},
    {id: 'Amsterdam', name: 'Amsterdam'},
    {id: 'Dubai', name: 'Dubai'},
  ]
}

const observationSummary = {
  'Tokio': {latest: 28, max: 30, avg: 25, min: 20},
  'Helsinki': {latest: 28, max: 30, avg: 25, min: 20},
  'New York': {latest: 28, max: 30, avg: 25, min: 20},
  'Amsterdam': {latest: 28, max: 30, avg: 25, min: 20},
  'Dubai': {latest: 28, max: 30, avg: 25, min: 20},
}

app.get('/observationPoints', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.end(JSON.stringify(observationPoints));
})

app.get('/observationSummary', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.end(JSON.stringify(observationSummary));
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});


