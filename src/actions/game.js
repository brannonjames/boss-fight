import { DECLARE_WINNER, BATTLE_OVER, GAME_OVER, CHECK_IF_BATTLE_READY, START_BATTLE } from './actionTypes';


export function declareWinner(winner){
	return {
		type: DECLARE_WINNER,
		winner
	}
}

export function endBattle(){
	return {
		type: BATTLE_OVER 
	}
}

export function gameOver(over){
	return {
		type: GAME_OVER,
		over
	}
}



export function checkIfReadyToBattle(){
	return {
		type: CHECK_IF_BATTLE_READY
	}
}

export function startBattle(){
	return {
		type: START_BATTLE
	}
}
