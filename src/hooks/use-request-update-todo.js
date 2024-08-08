import { useState } from 'react';
import { ref, update } from 'firebase/database';
import { db } from '../firebase';

export const useRequestUpdateTodo = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateTodo = (id, completed) => {
		setIsUpdating(true);

		const todoToUpdateDbRef = ref(db, `todos/${id}`);

		update(todoToUpdateDbRef, {
			completed: !completed,
		})
			.then((response) => {
				console.log('The task is updated, the server response:', response);
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
