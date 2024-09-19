import { ACTION_TYPE } from '../constants';

export const setEditingTitleTodoID = (id) => ({
	type: ACTION_TYPE.SET_EDITING_TODO_ID,
	payload: id,
});
