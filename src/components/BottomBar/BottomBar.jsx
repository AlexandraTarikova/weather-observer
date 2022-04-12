import React from 'react';

import { Wrapper, ButtonStyled, LinkStyled } from './styles';

const BottomBar = ({buttons}) => {
  console.log('---BottomBar buttons: ', buttons);
  return (
    <Wrapper>
      {
        buttons.map(button => (
          button.type === 'link' ?
            <LinkStyled {...button.props}>{button.text}</LinkStyled>
            : <ButtonStyled {...button.props}>{button.text}</ButtonStyled>
        ))
      }
    </Wrapper>
  )
};

export default BottomBar;
