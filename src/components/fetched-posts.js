import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from './post'
import { fetchPosts } from '../redux/actions';
import { Loader } from './loader';

export const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const isLoading = useSelector(state => state.app.isLoading);

  if(isLoading) {
    return <Loader />
  }

  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Загрузить
      </button>
    )
  }
  return posts.map(post => <Post post={post} key={post.id} />)
};
