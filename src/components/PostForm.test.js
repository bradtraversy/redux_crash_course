import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { createPost } from '../actions/postActions';
import PostForm from './PostForm';

describe('<PostForm />', () => {
  const createMockStore = configureStore(getDefaultMiddleware());

  beforeAll(() => {
    fetchMock.enableMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  afterAll(() => {
    fetchMock.disableMocks();
  });

  it('render the form', () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <PostForm />
      </Provider>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Add Post'
    );
  });

  it(`create a new post`, async () => {
    const store = createMockStore();

    fetchMock.mockResponseOnce(
      JSON.stringify({
        title: 'Post title',
        body: 'Post body',
        id: 101,
      }),
      201
    );
    render(
      <Provider store={store}>
        <PostForm />
      </Provider>
    );

    user.type(screen.getByRole('textbox', { name: /title/i }), 'Post title');
    user.type(screen.getByRole('textbox', { name: /body/i }), 'Post body');
    user.click(screen.getByRole('button', { name: /submit/i }));

    // Wait for the request to success
    // TODO: Replace this because is a bad practice
    await waitFor(() => {
      const actions = store.getActions();

      expect(actions).toHaveLength(2);
      expect(actions[0]).toHaveProperty('type', createPost.pending.type);
      expect(actions[1]).toHaveProperty('type', createPost.fulfilled.type);
    });
  });
});
