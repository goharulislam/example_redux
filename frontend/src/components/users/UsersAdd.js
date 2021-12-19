import axios from "../../axios/index";
import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

export default function UsersAdd(props){
const [data, setData] = useState({table:"users", user_id:"", password:"",});
const [msg, setMsg] = useState('');
const [response, setResponse] = useState([]);
const [handleUserIdChange, setHandleUserIdChange] =  useState('');

async function create(event){
	event.preventDefault();
	try{
		response = await axios.post('/create', data);
		const {rows} = await response.data;
		console.log(rows);
		//console.log('Rows: '+ parseInt(this.rows.length));
		if(rows !== ''){
			//this.setUser(rows);				/*Set row in state*/
			//this.setToken(token);				/*Set token in state*/
			setMsg = "Added successfully.";
			//this.$router.push('/Students');
		}else{
			this.$router.push('/');
		}
	}catch(err){
		console.error(err);
	}
}

function onCancel(e){
	e.preventDefault();
	props.parentCallback("read");
}

return(
	<div>
		<form onSubmit={create}>
			<h3>ADD</h3>
			<label>ID</label>
			<input type="text" value={data.user_id} onChange={(event) => setData({...data, user_id: event.target.value })} />
			<label>Password</label>
			<input type="password" value={data.password} onChange={(event) => setData({...data, password: event.target.value })} />
			<button className="btn btn-primary"><i className="fas fa-plus"></i> Add</button>
			<button className="btn btn-default" onClick={onCancel}>Cancel</button>
		</form>
	</div>
);
}