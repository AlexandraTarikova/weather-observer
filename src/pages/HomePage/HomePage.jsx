import React from 'react';

import {Plate, Wrapper} from './styles';

const HomePage = (props) => {
  return (
    <Wrapper>
      <Plate to={'/observations'}>Observe</Plate>
      <Plate to={'/create_observation'}>Submit observation</Plate>
    </Wrapper>
  )
};

export default HomePage;

HomePage.defaultProps = {

};