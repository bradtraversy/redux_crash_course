import {FETCH_POSTS, CURRENT_POST} from './types';
import {posts} from "../Constants/data";

export const fetchPosts = () => dispatch => {
    dispatch({type: FETCH_POSTS, payload: posts})
};
//
// export const createPost = postData => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   })
//     .then(res => res.json())
//     .then(post =>
//       dispatch({
//         type: NEW_POST,
//         payload: post
//       })
//     );
// };
export const getPost = (id) => dispatch => {
    const data = posts.find((o => o.id = id))
    dispatch({type: CURRENT_POST, payload: data})
}
