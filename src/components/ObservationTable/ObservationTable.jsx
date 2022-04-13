import React from 'react';

import { Table } from './styles';

const ObservationTable = ({observations = []}) => {
  return <Table>
    <tbody>
      <tr>
        <th>date</th>
        <th>time</th>
        <th>temp</th>
      </tr>
      {
        observations.map((observation) => {
            const observationTime = new Date(observation.time);
            return <tr key={observation.time}>
              <td>{observationTime.getDate()}.{observationTime.getMonth()}.{observationTime.getFullYear()}</td>
              <td>{observationTime.getHours()}:{observationTime.getMinutes()}</td>
              <td>{observation.temp}℃</td>
            </tr>
          }
        )
      }
    </tbody>
  </Table>
};

export default ObservationTable;
