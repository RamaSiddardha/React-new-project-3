
import './App.css';
import AddUser from './Components/AddUser';
import UserList from './Components/UsersList';
import React from 'react';

function App() {

  const [userdetails,setUserDetails] = React.useState([   ])
  const addUserhandler =(userName,Age,collegeName) =>{
setUserDetails(prev => {
  return [...prev,{name:userName,age:Age,collegeName:collegeName}]
})
  }
  
  return <React.Fragment>
    <AddUser onUser={addUserhandler}></AddUser>
    <UserList users={userdetails}></UserList>
  </React.Fragment>
   
}

export default App;
