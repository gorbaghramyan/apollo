import { useQuery } from '@apollo/client';
import { PostI } from '../../interfaces/post.interface';
import { GET_POSTS } from '../queries/getPosts';

export const useGetPosts = (): PostI[] => {
	const { data } = useQuery(GET_POSTS, {
		variables: { options: { paginate: { page: 1, limit: 1000 } } },
	});

	return data?.posts?.data || [];
};
