import { useEffect, useState } from 'react';

export const useRequestGetTodos = (refreshTodosFlag, isSorting) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch(`http://localhost:3005/todos${isSorting ? '?_sort=title' : ''}`)
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos))
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag, isSorting]);

	return {
		todos,
		isLoading,
	};
};
