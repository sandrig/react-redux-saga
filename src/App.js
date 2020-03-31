import React from 'react';
import PostForm from './components/post-form';
import PostList from './components/post-list';
import { FetchedPosts } from './components/fetched-posts';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>React Redux Saga</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <PostList />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
