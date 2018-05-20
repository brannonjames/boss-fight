import { GET_BOSSES } from '../actions/actionTypes';


function bosses(state=[], action){
  switch(action.type){
    case GET_BOSSES:
      return action.bosses
    default:
      return state
  }
}

export default bosses;
