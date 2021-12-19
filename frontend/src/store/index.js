import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import game from './reducers/gameReducers';
import person from './reducers/personReducers';
import userReducer from './reducers/userReducers';
import thunk from 'redux-thunk';

/*
Reducer return State.
To update/change state, dispatch Action.
Action is an object with minimum 2 properties. Type and Payload.
Reducer accepts state and actions.

Create store.
Create reducer.
Create actions (dispacth) to update state through reducer.
*/

const AllReducers = combineReducers({person, game, users:userReducer});
const InitialStates = {
  game:{name: "Cricket"},
  person:{name: "Gohar", email:'goharulislam@gmail.com'},
  users: [],
}

const middleware = [thunk]
const store = createStore(AllReducers, InitialStates, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;