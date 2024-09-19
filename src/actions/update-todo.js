import { fetchUpdateTodo } from '../api';
import { setError, setIsUpdating } from '../actions';
import { ACTION_TYPE } from '../constants';

export const updateTodo = (newTodoData) => (dispatch) => {
	dispatch(setError(''));
	dispatch(setIsUpdating(true));

	fetchUpdateTodo(newTodoData)
		.then((response) => {
			console.log('The task is updated, the server response:', response);
			dispatch({ type: ACTION_TYPE.UPDATE_TODO, payload: newTodoData });
		})
		.catch((e) => dispatch(setError(e.message)))
		.finally(() => {
			dispatch(setIsUpdating(false));
		});
};
