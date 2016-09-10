export default function({ dispatch }) {
	return next => action => {
		// If action does not have payload
		// or the payload does not have a .then property
		// we dont care about it set it on
		if(!action.payload || !action.payload.then) {
			return next(action); 
		}

		// Make sure the action's promise resolve
		// get response back
		action.payload
			.then(function(response) {
				// create new action with old type,
				// but replace payload promise with new response
				const newAction = { ...action, payload: response };

				// dispatch new action or make new action flow back to 
				// the first middleware again!!!
				dispatch(newAction);
			});
	};
}

// return function(next) {
// 	return function(action) {
// 		console.log(action);
// 		next(action);
// 	}
// }