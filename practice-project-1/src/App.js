import React, {useState} from "react";

import "./App.css";
import {UserForm} from "./Components/UserForm/UserForm";
import { UserList } from "./Components/UserList/UserList";

function App() {
  
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    user.id = Math.random().toString();
    setUsers(prevState => {
      return [user,...prevState];
    })
  }
  
  console.log(users);
  return (
    <div className="App">
      <header className="App-header">
        <UserForm addUser={addUserHandler}/>
        <UserList users={users} />
      </header>
    </div>
  );
}

export default App;
