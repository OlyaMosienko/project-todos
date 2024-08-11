import { useState } from 'react';

export const useRequestAddANewTodo = (newTaskValue, setNewTaskValue, refreshTodos) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddANewTodo = (event) => {
		event.preventDefault();
		setNewTaskValue('');
		setIsCreating(true);

		fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: newTaskValue,
				completed: false,
			}),
		})
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				console.log('The task is created, the server response:', loadedTodos);
				refreshTodos();
			})
			.finally(() => {
				setIsCreating(false);
			});
	};

	return {
		isCreating,
		requestAddANewTodo,
	};
};
