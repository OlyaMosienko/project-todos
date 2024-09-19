import { ACTION_TYPE } from '../constants';

export const setError = (error) => ({
	type: ACTION_TYPE.SET_ERROR,
	payload: error,
});
