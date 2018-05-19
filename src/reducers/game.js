import { DECLARE_WINNER, BATTLE_OVER, GAME_OVER, CHECK_IF_BATTLE_READY, START_BATTLE } from '../actions/actionTypes';

const defaultState = {
	winner: {},
	gameOver: false,
	battleReady: false,
	battleOver: true,
	arena: {},
	updatedCards: {}
}

function game(state, action){
	switch(action.type){
		case CHECK_IF_BATTLE_READY:
			const playerReady = state.player.bosses.some(boss => boss.selected);
			const botReady = state.bot.bosses.some(boss => boss.selected);
			return playerReady && botReady ?
				{...state.game, battleReady: true} :
				{...state.game, battleReady: false}
		case START_BATTLE:
			const playerCard = state.player.bosses.find(boss => boss.selected);
			const botCard = state.bot.bosses.find(boss => boss.selected);
			const playerPower = playerCard.offense;
			const botPower = botCard.offense;
			const newPlayerPower = playerPower - botPower;
			const newBotPower = botPower - playerPower;
			return {
				...state.game,
				battleReady: false,
				battleOver: false,
				arena: {
					playerCard,
					botCard,
					playerPower,
					botPower,
					newPlayerPower,
					newBotPower
				},
				updatedCards: {
					player: {
						bosses: state.player.bosses.map(boss => boss.id === playerCard.id ? {...boss, offense: newPlayerPower, selected: false} : boss).filter(boss => boss.offense > 0)
					},
					bot: {
						bosses: state.bot.bosses.map(boss => boss.id === botCard.id ? {...boss, offense: newBotPower, selected: false} : boss).filter(boss => boss.offense > 0)
					}
				}
			}
		case BATTLE_OVER:
			return {...state.game, battleOver: true};
		case GAME_OVER:
			return {...state.game, gameOver: action.over};
		case DECLARE_WINNER:
			return {...state.game, winner: action.winner};
		default:
			// return {...state.game, battleReady: false, battleOver: true};
			return {...defaultState, ...state.game};
	}
}

export default game;
