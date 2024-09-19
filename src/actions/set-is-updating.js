import { ACTION_TYPE } from '../constants';

export const setIsUpdating = (flag) => ({
	type: ACTION_TYPE.SET_IS_UPDATING,
	payload: flag,
});
