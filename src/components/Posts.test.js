import { render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { FETCH_POSTS } from '../actions/types';
import Posts from './Posts';

describe('<Post />', () => {
  const createMockStore = configureStore([thunk]);

  beforeAll(() => {
    fetchMock.enableMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  afterAll(() => {
    fetchMock.disableMocks();
  });

  it('render with empty posts', async () => {
    const store = createMockStore({ posts: { items: [], item: undefined } });

    fetchMock.mockResponseOnce('[]');
    render(
      <Provider store={store}>
        <Posts />
      </Provider>
    );

    expect(screen.getByRole('heading', { name: 'Posts' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Posts' }).nextSibling
    ).toBeNull();
  });

  it('render the posts', async () => {
    const store = createMockStore({
      posts: {
        items: [
          {
            userId: 1,
            id: 1,
            title:
              'Est do sint proident esse nisi non ex eu quis adipisicing eu esse sint.',
            body: 'Enim mollit adipisicing veniam ullamco enim commodo ex laboris aute irure ut.\nVelit consectetur eu mollit esse aliquip ut.',
          },
          {
            userId: 1,
            id: 2,
            title:
              'Tempor anim deserunt sint do anim consequat officia exercitation.',
            body: 'Sit id labore labore reprehenderit occaecat mollit dolore ea labore sunt et pariatur ullamco sit cillum.\nQuis deserunt qui adipisicing proident voluptate et esse fugiat ad aliquip incididunt.',
          },
          {
            userId: 1,
            id: 3,
            title:
              'Velit irure ex do ex aliquip cupidatat qui dolore eiusmod reprehenderit exercitation amet eu.',
            body: 'Anim eiusmod velit laborum enim cupidatat consectetur eiusmod.\nEx id quis non irure.',
          },
        ],
        item: undefined,
      },
    });

    fetchMock.mockResponseOnce('[]');
    render(
      <Provider store={store}>
        <Posts />
      </Provider>
    );

    expect(screen.getByRole('heading', { name: 'Posts' })).toBeInTheDocument();
    await waitFor(() => {
      const actions = store.getActions();

      expect(actions).toHaveLength(1);
      expect(actions[0]).toHaveProperty('type', FETCH_POSTS);
    });
    expect(screen.getAllByTestId('post')).toHaveLength(3);
  });
});
