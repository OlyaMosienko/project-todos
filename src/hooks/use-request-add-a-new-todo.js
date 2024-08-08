import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const useRequestAddANewTodo = (newTaskValue, setNewTaskValue) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddANewTodo = (event) => {
		event.preventDefault();
		setNewTaskValue('');
		setIsCreating(true);

		const todosDbRef = ref(db, 'todos');

		push(todosDbRef, {
			title: newTaskValue,
			completed: false,
		})
			.then((loadedTodos) => {
				console.log('The task is created, the server response:', loadedTodos);
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
