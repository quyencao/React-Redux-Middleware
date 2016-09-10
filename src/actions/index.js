
import { FETCH_USER } from './types';

export function fetchUsers() {
	return {
		type: FETCH_USER,
		payload: [
			{
				name: 'Jame'
			},
			{
				name: "Alex"
			},
			{
				name: "Jax"
			}
		]
	}
}