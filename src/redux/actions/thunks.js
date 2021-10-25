import { fetchUserSuccess, showWinner } from './userActions';
import { fetchUsers } from '../../api';

export const fetchUser = () => {
	return async (dispatch) => {
		const users = await Promise.resolve(fetchUsers());
		console.log('FETCH user', users);
		dispatch(fetchUserSuccess(users.data));
	};
};

// TODO:Задержка при SHOW WINNER (test)
export const delay = (status) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(showWinner(status));
		}, 500);
	};
};
