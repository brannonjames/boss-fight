import React from 'react';
// import PlayerStage from '../components/PlayerStage';
import { playerSelectedToggle } from '../actions/players';
import { checkIfReadyToBattle } from '../actions/game';
import BossCard from '../components/BossCard';
import { connect } from 'react-redux';



class PlayerStage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cards: [...this.props.player.bosses]
    }
  }

  handleClick(id){
    this.props.playerSelectedToggle(id)
    this.props.checkIfReadyToBattle(this.props.player.bosses.some(boss => boss.selected));
  }


  render(){
    let cards = this.props.player.bosses.map(boss => (
      <BossCard
        key={boss.id}
        {...boss}
        showing={true}
        isPlayer={this.props.isPlayer}
        toggleCard={this.handleClick.bind(this, boss.id)}
      />
    ))
    return (
      <section className="PlayerStage">
        {cards}
      </section>
    )
  }

}



function mapStateToProps(state){
  return {
    player: state.player,
    isPlayer: true
  }
}

const dispatchers = {
  playerSelectedToggle,
  checkIfReadyToBattle

}


export default connect(mapStateToProps, dispatchers)(PlayerStage);
