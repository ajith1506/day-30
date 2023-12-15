import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  const handleAddUser = user => {
    axios.post('https://jsonplaceholder.typicode.com/users', user).then(response => {
      setUsers([...users, response.data]);
    });
  };

  const handleUpdateUser = updatedUser => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser)
      .then(response => {
        setUsers(users.map(user => (user.id === updatedUser.id ? response.data : user)));
        setEditing(false);
      });
  };

  const handleDeleteUser = userId => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`).then(() => {
      setUsers(users.filter(user => user.id !== userId));
    });
  };

  const handleEditUser = user => {
    setEditing(true);
    setCurrentUser(user);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setCurrentUser({});
  };

  return (
    <div>
      {editing ? (
        <EditUserForm user={currentUser} onUpdate={handleUpdateUser} onCancel={handleCancelEdit} />
      ) : (
        <>
          <AddUserForm onAdd={handleAddUser} />
          <UserList users={users} onDelete={handleDeleteUser} onEdit={handleEditUser} />
        </>
      )}
    </div>
  );
};

export default App;
