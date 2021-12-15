/* eslint-disable no-undef */
import React, { useState } from 'react';

const DeleteUser = () => {
  const [userId, setId] = useState('');
  const handleSubmit = () => {
    axios.delete(`https://repechaje-backend.herokuapp.com/user/${userId}`);
  };
  return (
    <div className="profile">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID de usuario a eliminar"
          value={userId}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Eliminar Usuario</button>
      </form>
    </div>
  );
};
export default DeleteUser;
