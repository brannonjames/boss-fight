import React from 'react';
import '../styles/PowerDisplay.css';


const PowerDisplay = props => {
  const newPower = props.newPower < 0 ? "KO" : props.newPower
  const { power } = props;
  return (
    <div>
      <p className="old">{power}</p>
      <p className="new">{newPower}</p>
    </div>
  )
}




export default PowerDisplay
