import {UPDATE_PERSON} from '../actions/personActions';

const person = (state = {}, actions) => {
  switch(actions.type){
    case UPDATE_PERSON:
      return Object.assign({}, state, {name: actions.payload});
    default:
      return state;
  }
}

export default person;