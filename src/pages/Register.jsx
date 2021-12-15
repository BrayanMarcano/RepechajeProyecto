/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { password, name, email };

    fetch('https://repechaje-backend.herokuapp.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify(user),
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      if (response.ok) {
        history.push('/');
      }
    })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Introduzca su email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Introduzca su nombre"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Introduzca su contraseña"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Crear Usuario</button>
        { error && <div> { error }</div> }
      </form>
    </div>
  );
};

export default Register;
