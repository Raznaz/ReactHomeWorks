export const REMOVE_USER = '[USER] remove user';
export const ADD_USER = '[USER] add user';
export const FILTER_USER = '[USER] filter user';
export const NEW_USER = '[USER] new user';
export const SHOW_WINNER = '[USER] winner user';
export const GET_USERS_FROM_LS = '[USER] users from LS';

export const FETCH_USER = '[USER] Fetch users';
export const FETCH_USER_SUCCESS = '[USER] Fetch users success';

export const fetchUserSuccess = (users) => ({
	type: FETCH_USER_SUCCESS,
	payload: { users },
});

// ---

export const getUsersFromLS = (arrFromLS) => ({
	type: GET_USERS_FROM_LS,
	payload: { arrFromLS },
});

export const removeUser = (id) => ({
	type: REMOVE_USER,
	payload: id,
});

export const addUser = (user) => ({
	type: ADD_USER,
	payload: user,
});

export const newUser = (newUser) => ({
	type: NEW_USER,
	payload: newUser,
});

export const filterUsers = (filter) => ({
	type: FILTER_USER,
	payload: filter,
});

export const showWinner = (status) => ({
	type: SHOW_WINNER,
	payload: status,
});
