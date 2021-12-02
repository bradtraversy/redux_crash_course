import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../slices/postsSlice';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const newPost = useSelector((state) => state.posts.item);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const postItems = useMemo(
    () =>
      (newPost ? [newPost, ...posts] : posts).map((post) => (
        <div data-testid="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )),
    [posts, newPost],
  );

  return (
    <div>
      <h1>Posts</h1>
      {postItems}
    </div>
  );
}

export default Posts;
