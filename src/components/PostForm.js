import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createPost } from '../actions/postActions';

function PostForm() {
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
  });

  function onChange(event) {
    setNewPost((prevNewPost) => ({
      ...prevNewPost,
      [event.target.name]: event.target.value,
    }));
  }

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(createPost(newPost));
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            onChange={onChange}
            value={newPost.title}
          />
        </div>
        <br />
        <div>
          <label htmlFor="body">Body: </label>
          <br />
          <textarea
            id="body"
            name="body"
            onChange={onChange}
            value={newPost.body}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
