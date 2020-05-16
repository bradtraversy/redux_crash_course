import { FETCH_POSTS, NEW_POST, CURRENT_POST } from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  initialPost:false,
  currentPost:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        initialPost:true
      };
    case NEW_POST:
      return {
        ...state,
        post: action.payload
      };
    case CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload
      };

    default:
      return state;
  }
}
