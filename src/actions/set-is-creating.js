import { ACTION_TYPE } from '../constants';

export const setIsCreating = (flag) => ({
	type: ACTION_TYPE.SET_IS_CREATING,
	payload: flag,
});
