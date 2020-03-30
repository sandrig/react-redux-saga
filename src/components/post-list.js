import React from 'react';
import { connect } from 'react-redux';
import { Post } from './post';

const PostList = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="text-center">Постов пока нет</p>
  }
  return syncPosts.map(post => <Post post={post} key={post} />)
};

const mapStateToProps = (state) => ({
  syncPosts: state.posts.posts
});

const enhance = connect(mapStateToProps, null);

export const Posts = enhance(PostList);
