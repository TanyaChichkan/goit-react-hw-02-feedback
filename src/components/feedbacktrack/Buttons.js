import React from 'react';
import PropTypes from 'prop-types';


const Buttons=({onfeedBackChange, options})=>{
  return(
    <>
    {Object.keys(options).map(key=>{
      return (
        <button type="button"
        data-name={key}
        onClick={onfeedBackChange} key={key}>{key[0].toUpperCase()+key.slice(1)}</button>)
    })}
    </>
  )
};

Buttons.propTypes = {
  onfeedBackChange:PropTypes.func.isRequired,
  options:PropTypes.array.isRequired
};


export default Buttons;
