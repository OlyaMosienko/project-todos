import { setIsLoading, setError, setTodos } from '../actions';
import { fetchTodos } from '../api';

export const getTodos = (dispatch) => {
	dispatch(setIsLoading(true));
	dispatch(setError(''));

	fetchTodos()
		.then((loadedTodos) => dispatch(setTodos(loadedTodos)))
		.catch((e) => dispatch(setError(e.message)))
		.finally(() => {
			dispatch(setIsLoading(false));
		});
};
