import { fetchCreateTodo } from '../api';
import { setIsCreating, setError } from '../actions';
import { ACTION_TYPE } from '../constants';

export const createTodo = (newTodo) => (dispatch) => {
	dispatch(setIsCreating(true));

	fetchCreateTodo(newTodo.trim())
		.then((createdTodo) => {
			console.log('The task is created, the server response:', createdTodo);
			dispatch({ type: ACTION_TYPE.CREATE_TODO, payload: createdTodo });
		})
		.catch((e) => dispatch(setError(e.message)))
		.finally(() => {
			dispatch(setIsCreating(false));
		});
};
