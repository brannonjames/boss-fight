import { FILL_PLAYER_DECKS, CARD_VISIBLE_TOGGLE, PLAYER_CARD_SELECT_TOGGLE, BOT_CARD_SELECT_TOGGLE, UPDATE_CARDS } from './actionTypes';

export function fillPlayerDecks(bosses){
	return {
		type: FILL_PLAYER_DECKS,
		bosses
	}
}


export function visibilityToggle(id){
	return {
		type: CARD_VISIBLE_TOGGLE,
		id
	}
}


export function playerSelectedToggle(id){
	return {
		type: PLAYER_CARD_SELECT_TOGGLE,
		id
	}
}

export function botSelectedToggle(id){
	return {
		type: BOT_CARD_SELECT_TOGGLE,
		id
	}
}


export function updateCards(player, bot){
	return {
		type: UPDATE_CARDS,
		player,
		bot
	}
}
