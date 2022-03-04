import React from 'react';
import { PostI } from '../../../../interfaces/post.interface';

const PostsGridItem: React.FC<{ post: PostI }> = ({ post }) => {
  return (
    <div>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default PostsGridItem;
