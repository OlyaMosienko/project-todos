import { ACTION_TYPE } from '../constants';

export const setSearchValue = (value) => ({
	type: ACTION_TYPE.SET_SEARCH_VALUE,
	payload: value,
});
