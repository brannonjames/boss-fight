import { GET_BOSSES } from './actionTypes';
import fetchReddit from '../services/redditAPI';


export function handleBosses(bosses){
  return {
    type: GET_BOSSES,
    bosses
  }
}



export function getBosses(){
  return dispatch => {
    return fetchReddit()
      .then(posts => {
        dispatch(handleBosses(posts));
        return posts;
      })
  }
}
