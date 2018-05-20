import React from 'react';
import {connect} from 'react-redux';
import BossCard from '../components/BossCard';
import './../styles/Arena.css';
import { endBattle } from '../actions/game';


class Arena extends React.Component {


  render(){
    const {arena} = this.props;
    return (
      <div className="Arena-back">
      <div className="Arena">
        <h1>Arena</h1>
        <div className="ArenaStage">
          <div>
            <h2>You</h2>
            <BossCard
              {...arena.playerCard}
              power={arena.playerPower}
              newPower={arena.newPlayerPower}
              showing={true}
            />
          </div>
          <div>
            <h2>Opponent</h2>
            <BossCard
              {...arena.botCard}
              power={arena.botPower}
              newPower={arena.newBotPower}
              showing={true}
            />
          </div>
        </div>
      </div>
      </div>
    )
  }
}



function mapStateToProps(state){
  return {
    arena: state.game.arena,
    updateCards: state.game.updatedCards
  }
}

export default connect(mapStateToProps, {endBattle})(Arena);
