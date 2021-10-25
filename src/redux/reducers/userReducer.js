import { users } from '../../data/users';
import {
	ADD_USER,
	FETCH_USER_SUCCESS,
	FILTER_USER,
	GET_USERS_FROM_LS,
	NEW_USER,
	REMOVE_USER,
	SHOW_WINNER,
} from '../actions/userActions';

const initialState = {
	// users: users,
	users: [],
	filteredUsers: [],
	newUser: {},
	winnerUsers: [],
	userWin: {},
	isShowWinner: false,
	filterValue: '',
};

export function userReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_USER_SUCCESS:
			return { ...state, users: action.payload.users };
		case GET_USERS_FROM_LS:
			return { ...state, users: action.payload.arrFromLS };
		case FILTER_USER:
			const value = action.payload;
			if (value) {
				return {
					...state,
					filterValue: value,
					filteredUsers: state.users.filter(
						(user) =>
							(user.firstName + ' ' + user.lastName)
								.toLowerCase()
								.includes(action.payload.toLowerCase()) ||
							user.id.toString().includes(action.payload),
					),
				};
			} else {
				return {
					...state,
					filteredUsers: state.users,
					filterValue: action.payload,
				};
			}

		case SHOW_WINNER:
			const win = state.users.reduce((acum, user) =>
				acum.time < user.time ? acum : user,
			);
			console.log(action.payload);
			return {
				...state,
				userWin: win,
				winnerUsers: [...state.winnerUsers, win],
				isShowWinner: !action.payload,
			};
		case NEW_USER:
			return { ...state, newUser: action.payload };

		case ADD_USER:
			return {
				...state,
				users: [...state.users, action.payload],
			};

		case REMOVE_USER:
			// console.log('STATE:', state.users, 'ACTION:', action);
			return {
				...state,
				users: state.users.filter(
					(user) => user.id !== action.payload,
				),
			};

		default:
			return state;
	}
}
