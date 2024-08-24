import { HTTP_METHOD } from '../constants';
import config from '../config.json';

const todosEndpoint = config.baseURL + 'todos/';

export const fetchTodos = async () => {
	const response = await fetch(todosEndpoint);
	if (!response.ok) throw new Error('Can not get todos. Please, try again later.');
	return await response.json();
};

export const fetchTodo = async (id) => {
	const response = await fetch(`${todosEndpoint + id}`);
	if (!response.ok) throw new Error('Can not get todo. Please, try again later.');
	return await response.json();
};

export const fetchUpdateTodo = async ({ id, title, completed }) => {
	const response = await fetch(`${todosEndpoint + id}`, {
		method: HTTP_METHOD.PATCH,
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: title,
			completed: completed,
		}),
	});
	if (!response.ok) throw new Error('Can not update todo. Please, try again later.');

	return await response.json();
};

export const fetchCreateTodo = async (newTaskValue) => {
	const response = await fetch(todosEndpoint, {
		method: HTTP_METHOD.POST,
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: newTaskValue,
			completed: false,
		}),
	});
	if (!response.ok) throw new Error('Can not create todo. Please, try again later.');

	return await response.json();
};

export const fetchDeleteTodo = async (id) => {
	const response = await fetch(`${todosEndpoint}/${id}`, {
		method: HTTP_METHOD.DELETE,
	});
	if (!response.ok) throw new Error('Can not delete todo. Please, try again later.');

	return await response.json();
};
