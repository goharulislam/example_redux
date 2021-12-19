import update_game from './store/actions/gameActions';
import update_person from './store/actions/personActions';
import {connect} from 'react-redux';
import fetch_user from './store/actions/userActions';

function App(props){
return(
  <div className='App'>
    <h1>Bitfumes - Redux Example</h1>
    <p>Person Name: {props.person.name}</p>
    <button onClick={props.updatePerson}>Update Person</button>
    <p>Game Name: {props.game.name}</p>
    <button onClick={props.updateGame}>Update Game</button>
    <br />
    Users: <button onClick={props.fetchUsers}>Fetch Users</button>
    {
      props.users.length === 0 ? <p>No User Found.</p> : 
      props.users.map(user => <p key={user.id}>{user.id} - {user.first_name} - {user.email}</p>)
    }
  </div>
);
}

// [react-redux] To connect state and prop.
const mapStateToProps = (state) => {
  /*  
  OR we can return like this
  return state;
  */
  return{
    game: state.game,
    person: state.person,
    users: state.users,
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return{
    updateGame: () => {dispatch(update_game);},
    updatePerson: () => {dispatch(update_person);},
    fetchUsers: () => {dispatch(fetch_user);},
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);