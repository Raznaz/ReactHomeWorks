import {
	fetchUserSuccess,
	hideLoading,
	showLoading,
	showWinner,
} from './userActions';
import { fetchUsers } from '../../api';

export const fetchUser = () => {
	return async (dispatch) => {
		dispatch(showLoading());
		const users = await Promise.resolve(fetchUsers());
		setTimeout(() => {
			dispatch(fetchUserSuccess(users.data));
			dispatch(hideLoading());
		}, 2000);
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
