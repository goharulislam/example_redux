import axios from "../../axios/index";
import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

export default function UsersDelete(props){
const [data, setData] = useState({table:"users", user_id:""});
const [response, setResponse] = useState([]);

async function Delete_(e){
	e.preventDefault();
	try{
		const response = await axios.post('/delete', data);
		const result = response.data;
		if(result !== ''){
			console.log(result);
			props.parentCallback("read", result);
		}else{
			props.parentCallback("read");
		}
	}catch(err){
		console.error(err);
	}
}

function Cancel(e){
	e.preventDefault();
	console.log(props);
	props.parentCallback("read");
}

return(
	<div>
		<pre>{props.user_id}</pre>
		<h5>It is irreversible action. Are you sure you want to delete?</h5>
		<button className="btn btn-default" onClick={Cancel}>Cancel</button><button className="btn btn-danger" onClick={Delete_}>Yes</button>
	</div>
);
}