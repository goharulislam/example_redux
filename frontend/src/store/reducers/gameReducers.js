import {UPDATE_GAME} from '../actions/gameActions';

const game = (state = {}, actions) => {
  switch(actions.type){
    case UPDATE_GAME:
      return {name: actions.payload};
    default:
      return state;
  }
}

export default game;