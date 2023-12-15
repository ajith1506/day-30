import React, { useState } from 'react';

const AddUserForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <div className='container'>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Name:</label>
        <input type="text" className='form-control border-primary rounded-pill border border-4' value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className='form-group'>
        <label>Email:</label>
        <input type="email" className='form-control border-primary rounded-pill border border-4' value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className='btn btn-primary mt-3'>Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
