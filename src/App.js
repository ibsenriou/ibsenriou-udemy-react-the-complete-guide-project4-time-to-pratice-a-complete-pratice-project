import React, { useState } from "react";
import AddUser from "./components/UI/Users/AddUser";
import UsersList from "./components/UI/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: username, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
