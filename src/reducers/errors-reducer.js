import { ACTION_TYPE } from '../constants';

const initialErrorsState = {
	error: '',
};

export const errorsReducer = (state = initialErrorsState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_ERROR: {
			return {
				...state,
				error: payload,
			};
		}
		default:
			return state;
	}
};
