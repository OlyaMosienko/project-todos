import { useState } from 'react';

export const useRequestDeleteTodo = (refreshTodos) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTodo = (id) => {
		setIsDeleting(true);

		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('The task is deleted, the server response:', response);
				refreshTodos();
			})
			.finally(() => {
				setIsDeleting(false);
			});
	};

	return {
		isDeleting,
		requestDeleteTodo,
	};
};
