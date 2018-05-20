import React from 'react';
import '../styles/BattleButton.css';

const BattleButton = props => (
  <div
    className="BattleButton"
    onClick={props.battle}
  >
    <p>click to</p>
    <h2>Fight</h2>
  </div>
)




export default BattleButton;
