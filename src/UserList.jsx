import React from 'react';

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <div className='container pt-3 my-3 bg-info text-white'>
      <h2>User List</h2>
      <ul className='list-group '>
        {users.map(user => (
          <li className='list-group-item text-start mt-3 bg-primary text-white'key={user.id}>
            {user.name} - {user.email}
            <div className='text-center'>
            <button className='btn btn-success mx-3' onClick={() => onEdit(user)}>Edit</button>
            <button className='btn btn-danger' onClick={() => onDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
