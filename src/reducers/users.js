import { 
	FETCH_USER 
} from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_USER:
			// existing list users and new list users
			return [ ...state, ...action.payload.data ];

	}

	return state;
}