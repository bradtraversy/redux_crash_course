import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  items: [],
  item: undefined,
};

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

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.items = action.payload;
    });

    builder.addCase(createPost.fulfilled, (state, action) => {
      state.items = [action.payload, ...state.items];
      state.item = action.payload;
    });
  },
});

export default postsSlice.reducer;
