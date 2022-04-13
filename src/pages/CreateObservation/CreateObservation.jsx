import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {Wrapper, Text, Option, InputWrapper, InputStyled, SubmitWrapper} from './styles';
import BottomBar from "../../components/BottomBar/BottomBar";
import {trasformUnits, getUnitSymbol} from '../../utils';

const CreateObservation = ({database, observationPoints, preferredUnit = 'C'}) => {
  let navigate = useNavigate();
  const [selectedObservationPoint, setObservationPoint] = useState(null);
  const [currentValue, setValue] = useState("");
  const handleClick = (id) => setObservationPoint(id);
  const allowedRange = {
    C: {
      min: -100,
      max: 100
    },
    K: {
      min: trasformUnits({num: -100, to: 'K'}),
      max: trasformUnits({num: 100, to: 'K'}),
    },
    F: {
      min: trasformUnits({num: -100, to: 'F'}),
      max: trasformUnits({num: 100, to: 'F'}),
    }
  }
  const isNumeric = (val) => {
    return val === '' || val === '-' || /^-?\d+$/.test(val);
  }
  const onSubmit = () => {
    database.ref('Observations').child(selectedObservationPoint).push({
      temp: trasformUnits({num: +currentValue, from: preferredUnit}),
      time: (new Date()).toString(),
    }).then(() => navigate('/home'))
  }
  const onChange = (e) => {
    const newValue = e.target.value;
    if (!isNumeric(newValue)){
      e.target.value = currentValue;
    } else {
      setValue(newValue);
    }
  }

  const bottomBarButtons = [
    {type: 'link', text: 'Cancel', props: {to: '/home'}},
    {
      type: 'button',
      text: 'Submit',
      props: {
        onClick: onSubmit,
        disabled: !currentValue || currentValue > allowedRange[preferredUnit].max || currentValue < allowedRange[preferredUnit].min,
      }},
  ];
  return (
    <Wrapper>
      <Text>Selected the city you would like to submit data about:</Text>
      <div>
        {
          observationPoints.map((point) => <Option key={point.id} onClick={() => handleClick(point.id)} selected={selectedObservationPoint === point.id}>{point.name}</Option>)
        }
      </div>
      {
        selectedObservationPoint && <SubmitWrapper>
          <Text>Input the weather you are experiencing in {observationPoints.find(elem => elem.id === selectedObservationPoint).name}:</Text>
          <InputWrapper><InputStyled onChange={onChange}/>{getUnitSymbol(preferredUnit)}</InputWrapper>
        </SubmitWrapper>
      }
      <BottomBar buttons={bottomBarButtons}/>
    </Wrapper>
  )
};

export default CreateObservation;

CreateObservation.defaultProps = {

};