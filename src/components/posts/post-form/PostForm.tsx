import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreatePost } from '../../../apollo/hooks/useCreatePost';
import { CreatePostFormDataI } from '../../../interfaces/createPost.interfaces';

import "./PostForm.css";

const PostForm: React.FC = () => {
  const { register, handleSubmit } = useForm<CreatePostFormDataI>();
  const createPost = useCreatePost();

  const onSubmit = handleSubmit(({ title, body }) => {
    createPost({ variables: { input: { title, body } } });
  });

  return (
    <div className="post-form">
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input type="text" {...register('title')} />
        <label>Body</label>
        <textarea {...register('body')} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default PostForm;