import { useEffect, useState } from 'react';

export const useRequestSearchTodos = (refreshTodosFlag, searchValue) => {
	const [searchedTodos, setSearchedTodos] = useState([]);
	const [isSearching, setIsSearching] = useState(false);

	// const getFilteredTodos = (targetValue) => {
	// 	if (!targetValue) return;

	// 	const value = targetValue.toLowerCase();

	// 	const filteredTodos = todos.filter((todo) =>
	// 		todo?.title.toLowerCase().includes(value),
	// 	);

	// 	return filteredTodos;
	// };

	useEffect(() => {
		setIsSearching(true);

		fetch(`http://localhost:3005/todos?title=${searchValue}`)
			.then((searchedData) => searchedData.json())
			.then((searchedData) => {
				setSearchedTodos(searchedData);
			})
			.finally(() => setIsSearching(false));
	}, [refreshTodosFlag, searchValue]);

	return {
		searchedTodos,
		isSearching,
	};
};
