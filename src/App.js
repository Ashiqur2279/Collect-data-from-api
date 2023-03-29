import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <AllUsers></AllUsers>
    </div>
  );
}

function AllUsers (){
  const [users, setUsers] = useState([]);

  useEffect( () =>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then( data => setUsers(data));

  }, []);

  return (
    <div>
      <h1>Total User: {users.length}</h1>
      {
        users.map(user => <SingleUser email= {user.email} username= {user.username} name= {user.name}></SingleUser>)
      }
    </div>
  )
}

function SingleUser(props){
  return (
    <div className='user-Container'>
<h1>Name: {props.name} </h1>
<h1>Email: {props.email} </h1>
<h1>UserName: {props.username} </h1>
    </div>
  )
}

export default App;
