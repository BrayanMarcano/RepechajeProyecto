/* eslint-disable no-undef */
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [userId, setId] = useState('');
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  async function GetPost() {
    try {
      const response = await axios.get(`https://repechaje-backend.herokuapp.com/posts/${userId}`);
      setPosts(response.data); setError('');
    } catch (err) {
      setError('Ocurrio un error por lo cual no se pudieron traer las publicaciones del usuario');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    GetPost();
  };

  return (
    <div className="profile">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Introduzca su ID"
          value={userId}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Ver Publicaciones</button>
      </form>
      {error}
      {posts.map((post) => (
        <>
          <div className="box1">
            <p className="title">{(post.title)}</p>
            <p className="contentpost">{(post.content)}</p>
            <img className="image" src={(post.image)} alt="imagepost" />
            <p className="idpost">{(`El ID de su PUBLICACION es${post.id}`)}</p>

          </div>
        </>
      ))}
    </div>
  );
};
export default App;
