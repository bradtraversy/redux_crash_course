import { createReducer } from '@reduxjs/toolkit';

import { FETCH_POSTS, NEW_POST } from '../actions/types';

export const initialState = {
  items: [],
  item: undefined,
};

const postReducer = createReducer(initialState, (builder) => {
  builder.addCase(FETCH_POSTS, (state, action) => {
    state.items = action.payload;
  });

  builder.addCase(NEW_POST, (state, action) => {
    state.item = action.payload;
  });
});

export default postReducer;
