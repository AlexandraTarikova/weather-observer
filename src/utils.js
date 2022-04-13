const getUnitSymbol = (id = 'C') => {
  return [
    {id: 'C', text: '℃'},
    {id: 'F', text: '℉'},
    {id: 'K', text: 'K'},
  ].find(elem => elem.id === id)?.text
};

const trasformUnits = ({num, from = 'C', to = 'C'}) => {
  if (isNaN(num)){
    return null;
  }
  let result = +num;
  if (from === 'K'){
    result = result - 273.15;
  } else if (from === 'F'){
    result = (result - 32) * 5/9;
  }
  if (to === 'K'){
    result = result + 273.15;
  } else if (to === 'F'){
    result = result * 9 / 5 + 32;
  }
  return Math.round(result);
};

export {getUnitSymbol, trasformUnits};
