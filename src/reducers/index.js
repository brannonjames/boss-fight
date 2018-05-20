import bosses from './bosses';
import bot from './bot';
import player from './player';
import game from './game';



export default function rootReducer(state={}, action){
  return {
    bosses: bosses(state.bosses, action),
    player: player(state.player, action),
    bot: bot(state.bot, action),
    game: game(state, action)
  }
}
