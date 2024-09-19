import { ACTION_TYPE } from '../constants';

export const setIsSorting = (flag) => ({
	type: ACTION_TYPE.SET_IS_SORTING,
	payload: flag,
});
