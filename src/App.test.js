import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';

import App from './App';

describe('<App />', () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  afterAll(() => {
    fetchMock.disableMocks();
  });

  it('renders without crashing', async () => {
    fetchMock.mockResponseOnce('[]');
    render(<App />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome to React' })
    ).toBeInTheDocument();
    expect(screen.queryAllByTestId('post')).toHaveLength(0);
  });

  it('renders the list of post', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {
          userId: 1,
          id: 1,
          title: 'Eiusmod fugiat nostrud elit officia fugiat elit.',
          body: 'Veniam ipsum excepteur reprehenderit non adipisicing ullamco id consequat. Sunt ut do dolor amet eu. Sint ex deserunt labore amet in do. Incididunt aute qui ipsum incididunt excepteur enim ullamco. Labore veniam aliqua ipsum minim sint esse aliquip ex cupidatat in pariatur. Aliqua amet adipisicing magna incididunt laborum nisi ea velit esse nisi fugiat. Tempor anim anim duis elit nostrud aliqua sint non ad ex officia excepteur pariatur consectetur id. Pariatur eu sint cupidatat irure.',
        },
        {
          userId: 1,
          id: 2,
          title:
            'Irure consequat aliqua ex proident velit occaecat ea commodo non aliqua.',
          body: 'Lorem consectetur esse sint. Occaecat aute ut ea laboris cillum id. Anim deserunt et eu tempor voluptate officia consequat veniam elit. Laborum elit exercitation mollit amet. Ex dolore deserunt Lorem adipisicing cupidatat ut consequat. Qui proident nostrud duis amet sit non minim magna deserunt ut sit mollit ad. Nostrud veniam sit reprehenderit ut reprehenderit cillum ex. Ad cillum reprehenderit ea elit culpa eiusmod esse minim esse ea veniam irure laborum esse ex.',
        },
        {
          userId: 1,
          id: 3,
          title:
            'Incididunt est velit voluptate velit aliquip laborum non ea dolore aliqua ex.',
          body: 'Ipsum ullamco ea in enim incididunt ut consequat aliqua consequat proident sunt magna pariatur labore. Reprehenderit ea dolore in esse labore anim eu mollit laboris velit incididunt. Deserunt reprehenderit ut labore esse reprehenderit nisi do et irure minim qui irure. Do Lorem qui esse magna. Cillum exercitation duis irure ut aliquip deserunt voluptate.',
        },
      ])
    );
    render(<App />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome to React' })
    ).toBeInTheDocument();
    await expect(screen.findAllByTestId('post')).resolves.toHaveLength(3);
  });

  it('add a new post', async () => {
    const data = {
      title: 'Ut ex laborum ipsum laboris',
      body: 'Tempor commodo cillum ut adipisicing elit velit nulla amet magna proident deserunt.',
    };
    fetchMock
      .mockResponseOnce(
        `[
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto."
        }
      ]`
      )
      .mockResponseOnce(
        JSON.stringify({
          ...data,
          id: 4,
        }),
        201
      );
    render(<App />);

    user.type(screen.getByRole('textbox', { name: /title/i }), data.title);
    user.type(screen.getByRole('textbox', { name: /body/i }), data.body);
    user.click(screen.getByRole('button', { name: /submit/i }));

    await screen.findByText(data.title);

    expect(screen.getAllByTestId('post')).toHaveLength(2);
    expect(
      within(screen.getAllByTestId('post')[0]).getByRole('heading')
    ).toHaveTextContent(data.title);
  });
});
