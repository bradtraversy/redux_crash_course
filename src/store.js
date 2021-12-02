import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './slices/postsSlice';

export function createStore(preloadedState) {
  return configureStore({
    reducer: {
      posts: postsReducer,
    },
    preloadedState,
    devTools: true,
  });
}

const store = createStore();

export default store;
