import { FILL_PLAYER_DECKS, CARD_VISIBLE_TOGGLE, BOT_CARD_SELECT_TOGGLE, UPDATE_CARDS } from '../actions/actionTypes';

import player from './player';

const initialState = {
	name: "bot",
	bosses: [],
}

function bot(state=initialState, action){
	switch(action.type){
		case FILL_PLAYER_DECKS:
			return player(state, action);
		case CARD_VISIBLE_TOGGLE:
			return player(state, action);
		case BOT_CARD_SELECT_TOGGLE:
			return {
				...state,
				bosses: state.bosses.map(c => (
					c.id === action.id ? {...c, selected: !c.selected} : {...c, selected: false}
				))
			}
		case UPDATE_CARDS:
			return {
				...state,
				bosses: action.bot.bosses
			}
		default:
			return state
	}
}

export default bot;
