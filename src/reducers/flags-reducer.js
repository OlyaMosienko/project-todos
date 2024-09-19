import { ACTION_TYPE } from '../constants';

const initialFlagsState = {
	isLoading: false,
	isCreating: false,
	isUpdating: false,
	isSorting: false,
	editingTitleTodoID: null,
};

export const flagsReducer = (state = initialFlagsState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_IS_LOADING: {
			return {
				...state,
				isLoading: payload,
			};
		}
		case ACTION_TYPE.SET_IS_UPDATING: {
			return {
				...state,
				isUpdating: payload,
			};
		}
		case ACTION_TYPE.SET_IS_CREATING: {
			return {
				...state,
				isCreating: payload,
			};
		}
		case ACTION_TYPE.SET_IS_SORTING: {
			return {
				...state,
				isSorting: payload,
			};
		}
		case ACTION_TYPE.SET_EDITING_TODO_ID: {
			return {
				...state,
				editingTitleTodoID: payload,
			};
		}
		default:
			return state;
	}
};
