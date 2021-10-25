import { fetchUserSuccess } from './userActions';
import { fetchUsers } from '../../api';

export const fetchUser = () => {
	return async (dispatch) => {
		const users = await Promise.resolve(fetchUsers());
		console.log('FETCH user', users);
		dispatch(fetchUserSuccess(users.data));
	};
};
