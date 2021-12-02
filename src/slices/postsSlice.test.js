import { Reducer, Thunk } from 'redux-testkit';
import fetchMock from 'jest-fetch-mock';

import postsReducer, {
  createPost,
  fetchPosts,
  initialState,
} from './postsSlice';

describe('Posts reducer', () => {
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
    expect(postsReducer(initialState, {})).toMatchInlineSnapshot(`
      Object {
        "item": undefined,
        "items": Array [],
      }
    `);
  });

  it('fetch and set all posts', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
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
      ])
    );

    const dispatches = await Thunk(fetchPosts).execute();

    expect(dispatches).toHaveLength(2);
    expect(dispatches[0].getType()).toBe(fetchPosts.pending.type);
    expect(dispatches[1].getType()).toBe(fetchPosts.fulfilled.type);

    Reducer(postsReducer).expect(dispatches[1].getAction()).toChangeInState({
      items: dispatches[1].getAction().payload,
    });
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

    expect(dispatches).toHaveLength(2);
    expect(dispatches[0].getType()).toBe(createPost.pending.type);
    expect(dispatches[1].getType()).toBe(createPost.fulfilled.type);

    Reducer(postsReducer)
      .withState({
        items: [
          {
            userId: 1,
            id: 1,
            title:
              'Est do sint proident esse nisi non ex eu quis adipisicing eu esse sint.',
            body: 'Enim mollit adipisicing veniam ullamco enim commodo ex laboris aute irure ut.\nVelit consectetur eu mollit esse aliquip ut.',
          },
        ],
      })
      .expect(dispatches[1].getAction())
      .toChangeInState({
        items: [
          dispatches[1].getAction().payload,
          {
            userId: 1,
            id: 1,
            title:
              'Est do sint proident esse nisi non ex eu quis adipisicing eu esse sint.',
            body: 'Enim mollit adipisicing veniam ullamco enim commodo ex laboris aute irure ut.\nVelit consectetur eu mollit esse aliquip ut.',
          },
        ],
        item: dispatches[1].getAction().payload,
      });
  });
});
