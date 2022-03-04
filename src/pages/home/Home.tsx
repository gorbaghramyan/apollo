import React from 'react';
import { useGetPosts } from '../../apollo/hooks/useGetPosts';
import PostsGrid from '../../components/posts/posts/post-grid/PostGrid';
import './Home.css';

const Home: React.FC = () => {
  const posts = useGetPosts();

  return (
    <div className="home">
      <PostsGrid posts={posts} />
    </div>
  );
};

export default Home;
