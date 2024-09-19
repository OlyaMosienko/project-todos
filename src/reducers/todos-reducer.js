import { ACTION_TYPE } from '../constants';

const initialTodosState = {
	todos: [],
};

export const todosReducer = (state = initialTodosState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_TODOS: {
			return { ...state, todos: payload };
		}
		case ACTION_TYPE.DELETE_TODO: {
			return {
				...state,
				todos: [...state.todos].filter(({ id }) => id !== payload),
			};
		}
		case ACTION_TYPE.UPDATE_TODO: {
			return {
				...state,
				todos: [...state.todos].map((todo) =>
					todo.id === payload.id ? payload : todo,
				),
			};
		}
		case ACTION_TYPE.CREATE_TODO: {
			return { ...state, todos: [...state.todos, payload] };
		}
		default:
			return state;
	}
};
