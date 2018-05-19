import { FILL_PLAYER_DECKS, CARD_VISIBLE_TOGGLE, PLAYER_CARD_SELECT_TOGGLE, UPDATE_CARDS } from '../actions/actionTypes';


const initialState = {
	name: "player",
	bosses: [],
}


function player(state=initialState, action){
	switch(action.type){
		case FILL_PLAYER_DECKS:
			let allBosses = action.bosses;
			let playerBosses = [];
			for(let i=0;i<4;i++){
				let randomIndex = Math.floor(Math.random() * allBosses.length);
				let boss = allBosses[randomIndex];
				playerBosses.push({...boss, id: `${Math.random()}`});
			}
			return {...state, bosses: playerBosses}
		case CARD_VISIBLE_TOGGLE:
			return {
				...state,
				bosses: state.bosses.map(c => (
					c.id === action.id ? {...c, showing: !c.showing} : c
				))
			}
		case PLAYER_CARD_SELECT_TOGGLE:
			return {
				...state,
				bosses: state.bosses.map(c => (
					c.id === action.id ? {...c, selected: !c.selected} : {...c, selected: false}
				))
			}
		case UPDATE_CARDS:
			return {
				...state,
				bosses: action.player.bosses
			}
		default:
			return state
	}
}


export default player;
