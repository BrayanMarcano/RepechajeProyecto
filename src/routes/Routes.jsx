import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/NavBar';
import Register from '../pages/Register';
import NavRouter from './NavRouter';
import Login from '../pages/Login';
import CreatePost from '../pages/CrearPost';
import Profile from '../pages/Profile';
import DeleteUser from '../pages/DeleteUser';
import DeletePost from '../pages/DeletePost';

const Routes = () => (
  <Switch>
    <NavRouter path="/register">
      <Register />
    </NavRouter>
    <NavRouter path="/Login">
      <Login />
    </NavRouter>
    <NavRouter path="/post">
      <CreatePost />
    </NavRouter>
    <NavRouter path="/profile">
      <Profile />
    </NavRouter>
    <NavRouter path="/DeleteUser">
      <DeleteUser />
    </NavRouter>
    <NavRouter path="/DeletePost">
      <DeletePost />
    </NavRouter>
    <Route path="/">
      <NavBar />
      <App />
    </Route>
  </Switch>
);

export default Routes;
