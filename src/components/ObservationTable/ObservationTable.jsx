import React from 'react';

import { Table } from './styles';

const ObservationTable = (props) => {
  return <Table>
    <tr>
      <th>date</th>
      <th>time</th>
      <th>temp</th>
    </tr>
    {
      props.observations.map((observation) => (
        <tr>
          <td>{observation.date}</td>
          <td>{observation.time}</td>
          <td>{observation.temp}℃</td>
        </tr>
      ))
    }
  </Table>
};

export default ObservationTable;

ObservationTable.defaultProps = {
  observations: [
    {date: '12.09.2021', time: '05.12 am', temp: '17'},
    {date: '15.09.2021', time: '11.59 am', temp: '19'},
    {date: '28.09.2021', time: '02.30 pm', temp: '22'},
    {date: '07.10.2021', time: '08.24 am', temp: '19'},
    {date: '11.10.2021', time: '00.47 am', temp: '18'},
    {date: '20.10.2021', time: '10.29 pm', temp: '24'},
    {date: '03.11.2021', time: '07.19 pm', temp: '26'},
    {date: '09.11.2021', time: '04.31 am', temp: '24'},
    {date: '16.11.2021', time: '06.58 am', temp: '28'},
    {date: '18.11.2021', time: '09.45 am', temp: '29'},
  ]
}
