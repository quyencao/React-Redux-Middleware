import axios from 'axios';
import { FETCH_USER } from './types';

export function fetchUsers() {

	const URL = 'https://jsonplaceholder.typicode.com/users';

	const request = axios.get(URL);

	return {
		type: FETCH_USER,
		payload: request
	}
}