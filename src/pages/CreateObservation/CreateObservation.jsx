import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Wrapper, Text, Option, InputWrapper, InputStyled} from './styles';
import BottomBar from "../../components/BottomBar/BottomBar";

const CreateObservation = ({database, observationPoints}) => {
  let navigate = useNavigate();
  function isNumeric(val) {
    return val === '' || val === '-' || /^-?\d+$/.test(val);
  }
  const [selectedObservationPoint, setObservationPoint] = useState(null);
  const [currentValue, setValue] = useState("");
  const handleClick = (id) => setObservationPoint(id);
  const onSubmit = (e) => {
    database.ref('Observations').child(selectedObservationPoint).push({
      temp: +currentValue,
      time: (new Date()).toString(),
    }).then(() => navigate('/home'))
  }
  const onChange = (e) => {
    const newValue = e.target.value;
    if (!isNumeric(newValue) || newValue > 100){
      e.target.value = currentValue;
    } else {
      setValue(newValue);
    }
  }

  const bottomBarButtons = [
    {type: 'link', text: 'Cancel', props: {to: '/home'}},
    {type: 'button', text: 'Submit', props: {onClick: onSubmit, disabled: !currentValue}},
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
        selectedObservationPoint && <div>
          <Text>Input the weather you are experiencing in {observationPoints.find(elem => elem.id === selectedObservationPoint).name}:</Text>
          <InputWrapper><InputStyled onChange={onChange}/>℃</InputWrapper>
        </div>
      }
      <BottomBar buttons={bottomBarButtons}/>
    </Wrapper>
  )
};

export default CreateObservation;

CreateObservation.defaultProps = {

};