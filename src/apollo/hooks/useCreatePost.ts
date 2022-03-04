import { gql, useMutation } from '@apollo/client';
import { CreatePostInputI } from '../../interfaces/createPost.interfaces';
import { CREATE_POST } from '../mutations/createPost';

export const useCreatePost = (): ((createPostInput: CreatePostInputI) => any) => {
  const [createPost] = useMutation(CREATE_POST, {
    update(cache, { data: { createPost } }) {
      cache.modify({
        fields: {
          posts(existingPosts = []) {
            const newPostRef = cache.writeFragment({
              data: createPost,
              fragment: gql`
                fragment NewPost on Post {
                  id
                  title
                  body
                }
              `,
            });
            return [...existingPosts, newPostRef];
          },
        },
      });
    },
  });
  return createPost;
};
