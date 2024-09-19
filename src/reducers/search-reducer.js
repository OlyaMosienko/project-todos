import { ACTION_TYPE } from '../constants';

const initialSearchState = {
	searchValue: '',
};

export const searchReducer = (state = initialSearchState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_SEARCH_VALUE: {
			return {
				...state,
				searchValue: payload,
			};
		}
		default:
			return state;
	}
};
