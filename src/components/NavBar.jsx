import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <Link to="/register">
      Register
    </Link>
    <Link to="/login">
      Login
    </Link>
    <Link to="/">
      Home
    </Link>
    <Link to="/post">
      Crear Publicacion
    </Link>
    <Link to="/profile">
      Perfil
    </Link>
    <Link to="/DeleteUser">
      Eliminar Usuario
    </Link>
    <Link to="/DeletePost">
      Eliminar Publicación
    </Link>
  </div>
);

export default Navbar;
