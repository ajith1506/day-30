import React, { useState, useEffect } from 'react';

const EditUserForm = ({ user, onUpdate, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate({ id: user.id, name, email });
  };

  return (
    <div className='container'>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
        <label>Name:</label>
        <input type="text" className='form-control border-primary rounded-pill border border-4' value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className='form-group'>
        <label>Email:</label>
        <input type="email"  className='form-control border-primary rounded-pill border border-4' value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className='btn btn-primary mt-3 mx-3'>Update User</button>
        <button type="button" className='btn btn-danger mt-3 mx-3'onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
