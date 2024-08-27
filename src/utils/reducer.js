import { setTodoInTodos } from './set-todo-in-todos';

export const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_TODOS': {
			return payload;
		}
		case 'DELETE_TODO_IN_TODOS': {
			return state.filter(({ id }) => id !== payload);
		}
		case 'UPDATE_TODO_IN_TODOS': {
			return setTodoInTodos(state, payload);
		}
		case 'CREATE_NEW_TODO_IN_TODOS': {
			return [...state, payload];
		}
		default:
			return payload;
	}
};
