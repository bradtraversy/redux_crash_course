import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import { Provider } from 'react-redux';

import { createStore } from '../store';
import PostForm from './PostForm';

describe('<PostForm />', () => {
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
    const store = createStore();

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
    const store = createStore();

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
    // TODO: Replace this because it is a bad practice
    await waitFor(() => expect(store.getState().posts.item).toBeDefined());
  });
});
