import { useState } from 'react';

export const useRequestUpdateTodo = (refreshTodos) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateTodo = (id, completed) => {
		setIsUpdating(true);

		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				completed: !completed,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('The task is updated, the server response:', response);
				refreshTodos();
			})
			.finally(() => {
				setIsUpdating(false);
			});
	};

	return {
		isUpdating,
		requestUpdateTodo,
	};
};
