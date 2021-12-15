import React, { useState } from 'react';
import axios from 'axios';

const DeletePost = () => {
  const [idPost, setidPost] = useState('');
  const handleSubmit = () => {
    axios.delete(`https://repechaje-backend.herokuapp.com/posts/${idPost}`);
  };
  return (
    <div className="deletepost">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID de la publicacion para eliminar"
          value={idPost}
          onChange={(e) => setidPost(e.target.value)}
        />
        <button type="submit">Eliminar Post</button>
      </form>
    </div>
  );
};
export default DeletePost;
