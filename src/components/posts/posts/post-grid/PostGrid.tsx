import React from 'react';
import { PostsGridProps } from '../../../../interfaces/postsGridProps.interface';
import PostsGridItem from '../post-item/PostItem';

const PostsGrid: React.FC<PostsGridProps> = ({ posts }: PostsGridProps) => {
  return (
    <div className="posts-grid">
      {posts.map((post) => (
        <div key={post.id}>
          <PostsGridItem post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostsGrid;
