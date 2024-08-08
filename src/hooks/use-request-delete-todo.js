import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useRequestDeleteTodo = () => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTodo = (id) => {
		setIsDeleting(true);

		const todoToDeleteDbRef = ref(db, `todos/${id}`);

		remove(todoToDeleteDbRef)
			.then((response) => {
				console.log('The task is deleted, the server response:', response);
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
