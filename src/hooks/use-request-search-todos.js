import { useEffect, useState } from 'react';
import { ref, get, query, orderByChild, equalTo } from 'firebase/database';
import { db } from '../firebase';

export const useRequestSearchTodos = (searchValue) => {
	const [searchedTodos, setSearchedTodos] = useState({});
	const [isSearching, setIsSearching] = useState(false);

	useEffect(() => {
		setIsSearching(true);

		const searchedDbRef = ref(db, 'todos');
		const q = query(searchedDbRef, orderByChild('title'), equalTo(searchValue));

		get(q)
			.then((snapshot) => {
				if (snapshot.exists()) {
					setSearchedTodos(snapshot.val());
				} else {
					console.log('No data available');
				}
			})
			.finally(() => setIsSearching(false));
	}, [searchValue]);

	return {
		searchedTodos,
		isSearching,
	};
};
