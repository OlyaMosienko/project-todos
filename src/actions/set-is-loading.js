import { ACTION_TYPE } from '../constants';

export const setIsLoading = (isLoading) => ({
	type: ACTION_TYPE.SET_IS_LOADING,
	payload: isLoading,
});
