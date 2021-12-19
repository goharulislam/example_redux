import {UPDATE_USER} from '../actions/userActions';

const userReducer = (state = {}, actions) => {
  switch(actions.type){
    case UPDATE_USER:
      return actions.payload;
    default:
      return state;
  }
}

export default userReducer;