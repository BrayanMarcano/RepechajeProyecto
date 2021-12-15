/* eslint-disable no-undef */
import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [userId, setUserId] = useState('');
  const [posts, setPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      userId, title, content, image,
    };

    fetch('https://repechaje-backend.herokuapp.com/posts        ', {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify(post),
    }).then((response) => {
      if (response.ok) {
        setPost('Publicacion creada, para verla ingresa tu ID en el apartado "Perfil"');
      }
    });
  };
  return (
    <div className="posts">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Id del usuario"
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Titulo de publicacion"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripcion de la publicacion"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link de la imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Crear Publicacion</button>
        <p>{posts}</p>
      </form>
    </div>

  );
};
export default CreatePost;
