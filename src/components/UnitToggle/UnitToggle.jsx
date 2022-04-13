import React from 'react';
import {Body, Option} from "./styles";

const UnitToggle = ({selected, options, onToggle}) => {
  return (
      <Body>
        {
          options.map((elem) => <Option key={elem.id} selected={selected === elem.id} onClick={() => onToggle(elem.id)}>{elem.text}</Option>)
        }
      </Body>)
}

export default UnitToggle;

UnitToggle.defaultProps = {
  selected: 'C',
  options: [
    {id: 'C', text: '℃'},
    {id: 'F', text: '℉'},
    {id: 'K', text: 'K'},
  ]
}
