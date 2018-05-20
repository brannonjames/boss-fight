import React from 'react';
import { botSelectedToggle } from '../actions/players';
import { checkIfReadyToBattle } from '../actions/game';
import { connect } from 'react-redux';
import BossCard from '../components/BossCard';
import '../styles/stage.css';



class BotStage extends React.Component {

  componentDidUpdate(){
    if(!this.props.bot.bosses.some(boss => boss.selected) && this.props.bot.bosses.length > 0){
      this.selectRandomCard();
    }
  }

  componentDidMount(){
    // setTimeout(() => {
      this.selectRandomCard();
    // }, 1000)
  }


  selectRandomCard(){
    const { botSelectedToggle, bot } = this.props;
    const randomIndex = Math.floor(Math.random() * bot.bosses.length);
    botSelectedToggle(bot.bosses[randomIndex].id);
  }

  render(){
    let cards = this.props.bot.bosses.map(boss => (
      <BossCard
        key={boss.id}
        {...boss}
        showing={boss.showing}
        isBot={this.props.isBot}
         />
    ))
    return (
      <section className="BotStage">
        {cards}
      </section>
    )
  }

}


function mapStateToProps(state){
  return {
    bot: state.bot,
    isBot: true,

  }
}

const dispatchers = {
  botSelectedToggle,
  checkIfReadyToBattle
}



export default connect(mapStateToProps, dispatchers)(BotStage);
