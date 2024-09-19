import { setError, setIsUpdating } from '../actions';
import { fetchDeleteTodo } from '../api';
import { ACTION_TYPE } from '../constants';

export const deleteTodo = (idToDelete) => (dispatch) => {
	dispatch(setError(''));
	dispatch(setIsUpdating(true));

	fetchDeleteTodo(idToDelete)
		.then((response) => {
			console.log('The task is deleted, the server response:', response);
			dispatch({ type: ACTION_TYPE.DELETE_TODO, payload: idToDelete });
		})
		.catch((e) => dispatch(setError(e.message)))
		.finally(() => {
			dispatch(setIsUpdating(false));
		});
};
