
import './App.css';
import AddUser from './Components/AddUser';
import UserList from './Components/UsersList';
import React from 'react';

function App() {

  const [userdetails,setUserDetails] = React.useState([   ])
  const addUserhandler =(userName,Age) =>{
setUserDetails(prev => {
  return [...prev,{name:userName,age:Age}]
})
  }
  
  return <div>
    <AddUser onUser={addUserhandler}></AddUser>
    <UserList users={userdetails}></UserList>
  </div>
   
}

export default App;
