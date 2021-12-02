import { Reducer, Thunk } from 'redux-testkit';
import fetchMock from 'jest-fetch-mock';

import { FETCH_POSTS, NEW_POST } from '../actions/types';
import { createPost, fetchPosts } from '../actions/postActions';
import postReducer, { initialState } from './postReducer';

describe('posts reducer', () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  afterAll(() => {
    fetchMock.disableMocks();
  });

  it('get initial state', () => {
    expect(postReducer(initialState, {})).toMatchInlineSnapshot(`
      Object {
        "item": undefined,
        "items": Array [],
      }
    `);
  });

  it('set all posts', () => {
    const action = {
      type: FETCH_POSTS,
      payload: [
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
    };

    Reducer(postReducer)
      .expect(action)
      .toChangeInState({
        items: Array.from(action.payload),
      });
  });

  it('add post', () => {
    const action = {
      type: NEW_POST,
      payload: {
        title: 'Post title',
        body: 'Post body',
        id: 4,
      },
    };

    Reducer(postReducer).expect(action).toChangeInState({
      item: action.payload,
    });
  });

  it('fetch all posts', async () => {
    fetchMock.mockResponseOnce('[]');

    const dispatches = await Thunk(fetchPosts).execute();

    expect(dispatches).toHaveLength(1);
    expect(dispatches[0].getAction()).toHaveProperty('type', FETCH_POSTS);
  });

  it('create a new post', async () => {
    fetchMock.mockResponseOnce(`{
      "title": "Post title",
      "body": "Post body",
      "id": 4
    }`);

    const dispatches = await Thunk(createPost).execute({
      title: 'Post title',
      body: 'Post body',
    });

    expect(dispatches).toHaveLength(1);
    expect(dispatches[0].getAction()).toHaveProperty('type', NEW_POST);
  });
});
