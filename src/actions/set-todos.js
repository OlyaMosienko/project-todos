import { ACTION_TYPE } from '../constants';

export const setTodos = (newState) => ({
	type: ACTION_TYPE.SET_TODOS,
	payload: newState,
});
