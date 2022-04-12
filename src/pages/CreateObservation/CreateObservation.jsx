import React, {useState} from 'react';

import {Wrapper, Text, Option, InputWrapper, InputStyled} from './styles';
import BottomBar from "../../components/BottomBar/BottomBar";

const CreateObservation = ({observationPoints}) => {
  console.log('---CreateObservation observationPoints: ', observationPoints);
  const bottomBarButtons = [
    {type: 'link', text: 'Cancel', props: {to: '/home'}},
    {type: 'button', text: 'Submit', props: {}},
  ];
  const [selectedPoint, setPoint] = useState(null);
  const handleClick = (id) => setPoint(id);
  return (
    <Wrapper>
      <Text>Selected the city you would like to submit data about:</Text>
      <div>
        {
          observationPoints.map((point) => <Option onClick={() => handleClick(point.id)} selected={selectedPoint === point.id}>{point.name}</Option>)
        }
      </div>
      {
        selectedPoint && <div>
          <Text>Input the weather you are experiencing in {observationPoints.find(elem => elem.id === selectedPoint).name}:</Text>
          <InputWrapper><InputStyled></InputStyled>℃</InputWrapper>
        </div>
      }
      <BottomBar buttons={bottomBarButtons}/>
    </Wrapper>
  )
};

export default CreateObservation;

CreateObservation.defaultProps = {

};