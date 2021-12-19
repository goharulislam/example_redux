import { useState, useEffect, useRef } from 'react';
import Register from '../components/authentication/Register';
import Login from '../components/authentication/Login';

function Authentication(){
const [data, setData] = useState({user_id:"gohar@gmail.com", password:"admin", table:"users"});
const [msg, setMsg] = useState('');

return(
    <div>
      <Register />
      <Login />
    </div>
  );
}
export default Authentication;