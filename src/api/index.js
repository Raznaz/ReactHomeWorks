import axios from 'axios';

export const API = 'http://localhost:4000';

const instaAPI = axios.create({
	baseURL: API,
});

// api.get('/users');

export function fetchUsers() {
	return instaAPI.get('/users');
}
