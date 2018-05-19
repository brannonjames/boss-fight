import React from 'react';
import { connect } from 'react-redux';
import { fillPlayerDecks } from '../actions/players';
import { startBattle, endBattle, gameOver, declareWinner } from '../actions/game';
import {updateCards} from '../actions/players';
import BotStage from './BotStage';
import PlayerStage from './PlayerStage';
import Title from '../components/Title';
import Arena from './Arena';
import PlayAgain from '../components/PlayAgain';
import BattleButton from '../components/BattleButton';
import '../styles/Game.css';



class Game extends React.Component {

	battle = () => {
		let { startBattle } = this.props;
		startBattle();
		setTimeout(() => {
			let { updateCards, updatedCards, endBattle, gameOver, player, bot, declareWinner } = this.props;
			endBattle();
			updateCards(updatedCards.player, updatedCards.bot);
			if(updatedCards.player.bosses.length < 1 || updatedCards.bot.bosses.length < 1){
				gameOver(true);
				let winner = updatedCards.player.bosses.length > 0 ? player : bot;
				declareWinner(winner);
			}
		}, 4000);
	}

	resetGame = () => {
		let { declareWinner, fillPlayerDecks, bosses } = this.props;
		declareWinner({});
		fillPlayerDecks(bosses);
	}

	render(){
		const { battleReady, battleOver, winner } = this.props;
		return (
			<main className="Game">
				{/* <Arena /> */}
				{ !battleOver ? <Arena /> : null }
				{ winner.name ? <PlayAgain resetGame={this.resetGame} winner={winner.name} /> : null }
				<Title />
				{ battleReady ? <BattleButton battle={this.battle}/> : null }
				<BotStage />
				<PlayerStage />
			</main>
		)
	}
}



function mapStateToProps(state){
	return {
		battleReady: state.game.battleReady,
		battleOver: state.game.battleOver,
		game: state.game,
		arena: state.game.arena,
		updatedCards: state.game.updatedCards,
		player: state.player,
		bot: state.bot,
		bosses: state.bosses,
		winner: state.game.winner
	}
}

const dispatchers = {
	startBattle,
	fillPlayerDecks,
	updateCards,
	endBattle,
	gameOver,
	declareWinner
}


export default connect(mapStateToProps, dispatchers)(Game);
