import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetch',
  async (_, { signal }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      signal,
    });
    const posts = await response.json();

    return posts;
  }
);

export const createPost = createAsyncThunk('posts/create', async (postData) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  const post = await response.json();

  return post;
});
