import React from 'react';

import { Wrapper, ButtonStyled, LinkStyled } from './styles';

const BottomBar = ({buttons}) => {
  return (
    <Wrapper>
      {
        buttons.map(button => (
          button.type === 'link' ?
            <LinkStyled {...button.props} key={button.text}>{button.text}</LinkStyled>
            : <ButtonStyled {...button.props} key={button.text}>{button.text}</ButtonStyled>
        ))
      }
    </Wrapper>
  )
};

export default BottomBar;
