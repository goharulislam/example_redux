import { useState, useEffect, useRef } from 'react';
import axios from "../../axios/index";

export default function UsersRead(props){
const [data, setData] = useState({user_id:"gohar@gmail.com", password:"admin", table:"users"});
const [msg, setMsg] = useState('');
const [response, setResponse] = useState([]);
const [rows, setRows] = useState([])

useEffect(() => {
	axios.post('/get_all', data).then(json => setRows(json.data))
}, [])

function renderTable(){
	const listItems = rows.map((i) =>  
		<tr key={i.id}>
           <td>{i.user_id}</td>
           <td>{i.password}</td>
           <td>{i.role}</td>
           <td>{i.rights}</td>
		   <td><span onClick={()=>edit(i)}>E</span><br /><span onClick={()=>delete_(i)}>D</span></td>
         </tr>
  );  
  return (  
    <tbody>{listItems}</tbody>
  );  
}

function edit(i){
	//e.preventDefault();
	props.parentCallback("edit",i);
}

function delete_(i){
	//e.preventDefault();
	props.parentCallback("delete_",i);	
}

return(
	<div>
		<h3 className="pull-left">Users</h3>
		<table className="table table-sm table-hover">
		<thead className="table-light"><th>GRN</th><th>First Name</th><th>Last Name</th><th>Email</th></thead>
		{renderTable()}
		</table>
	</div>
);
}