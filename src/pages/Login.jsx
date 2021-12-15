/* eslint-disable no-undef */
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [iduser, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { password, email };

    fetch('https://repechaje-backend.herokuapp.com/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify(user),

    }).then((response) => response.json()).then((data) => {
      setId(data.id);
    });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Introduzca su email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Introduzca su contraseña"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Loguearse</button>
        <p>{iduser}</p>
      </form>
    </div>
  );
};

export default Login;
