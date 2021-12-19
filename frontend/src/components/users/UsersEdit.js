import axios from "../../axios/index";
import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

export default function UsersEdit(props){
const [data, setData] = useState({user_id:"gohar@gmail.com", password:"admin", table:"users"});
const [msg, setMsg] = useState('');
const [response, setResponse] = useState([]);

async function update(e){
	e.preventDefault();
	try{
		const response = await axios.post('/update', data);
		const {rows} = await response.data;
		console.log(rows);
		//console.log('Rows: '+ parseInt(this.rows.length));
		if(rows !== ''){
			//this.setUser(rows);				/*Set row in state*/
			//this.setToken(token);			/*Set token in state*/
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

return (
	<div>
		<form onSubmit={update}>
			<h3>ADD</h3>
			<label>ID</label>
			<input type="text" value={data.user_id} />
			<label>Password</label>
			<input type="password" value={data.password} />
			<button className="btn btn-primary"><i className="fas fa-plus"></i> Add</button>
			<button className="btn btn-default" onClick={onCancel}>Cancel</button>
		</form>
	</div>
);
}