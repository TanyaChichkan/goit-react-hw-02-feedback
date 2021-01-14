import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';


const Info=({good,bad,neutral,total,positive})=>{
  return(
    <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>

    </>
  )
};

Info.propTypes = {
  good:PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.node.isRequired
};

export default Info;