import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 60px;
  @media screen and (min-width: 576px) {
    display: inline-block;
  }
`

export const Text = styled.div`
  width: 100%;
  margin: 4px 0;
  font-size: 24px;
  text-align: left;
`

export const Option = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #cccccc;
  margin: 4px 0;
  font-size: 36px;
  opacity: ${({selected}) => selected ? 1 : 0.5};
  border-radius: 8px;
  &:last-child {
    margin-bottom: 20px;
  }
`

export const SubmitWrapper = styled.div`
  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const InputWrapper = styled.div`
  //width: 30%;
  height: 60px;
  display: flex;
  font-size: 36px;
  align-items: center;
  margin: 0 auto;
`

export const InputStyled = styled.input`
  width: 80px;
  font-size: 36px;
  text-align: right;
`




