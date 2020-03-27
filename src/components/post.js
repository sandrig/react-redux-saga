import React from 'react';

export const Post = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Title here {post}</h3>
      </div>
    </div>
  )
};
