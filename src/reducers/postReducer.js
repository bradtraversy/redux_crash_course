import { createReducer } from '@reduxjs/toolkit';

import { createPost, fetchPosts } from '../actions/postActions';

export const initialState = {
  items: [],
  item: undefined,
};

const postReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPosts.fulfilled, (state, action) => {
    state.items = action.payload;
  });

  builder.addCase(createPost.fulfilled, (state, action) => {
    state.item = action.payload;
  });
});

export default postReducer;
