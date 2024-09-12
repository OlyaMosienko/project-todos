import { useState, useEffect } from 'react';
import { setTodoInTodos } from '../utils';
import { useDebounce } from './use-debounce';
import {
	fetchCreateTodo,
	fetchDeleteTodo,
	fetchUpdateTodo,
	fetchTodos,
} from '../api/api';

export const useTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isUpdating, setIsUpdating] = useState(false);
	const [isCreating, setIsCreating] = useState(false);
	const [isSorting, setIsSorting] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [editingTitleTodoID, setEditingTitleTodoID] = useState(null);
	const [error, setError] = useState('');
	const [selectedOrder, setSelectedOrder] = useState('default');
	const [newTaskValue, setNewTaskValue] = useState('');

	const debouncedValue = useDebounce(searchValue, 2000);

	const searchedTodos = debouncedValue
		? todos.filter((todo) => todo?.title.toLowerCase().includes(searchValue))
		: isSorting
			? todos.toSorted((a, b) => (a['title'] > b['title'] ? 1 : -1))
			: todos;

	const handleDeleteTodoBtn = (id) => {
		setError('');
		setIsUpdating(true);

		fetchDeleteTodo(id)
			.then((response) => {
				console.log('The task is deleted, the server response:', response);
				setTodos(todos.filter(({ id: todoid }) => id !== todoid));
			})
			.catch((e) => setError(e.message))
			.finally(() => {
				setIsUpdating(false);
			});
	};

	const handleTodoTitleChange = (id, newTitle) => {
		setError('');
		setIsUpdating(true);

		fetchUpdateTodo({ id, title: newTitle })
			.then((response) => {
				console.log('The task is updated, the server response:', response);
				setTodos(setTodoInTodos(todos, { id, title: newTitle }));
			})
			.catch((e) => setError(e.message))
			.finally(() => {
				setIsUpdating(false);
			});
	};

	const handleTodoCompletedChange = (id, newCompletedValue) => {
		setError('');
		setIsUpdating(true);

		fetchUpdateTodo({ id, completed: newCompletedValue })
			.then((response) => {
				console.log('The task is updated, the server response:', response);
				setTodos(setTodoInTodos(todos, { id, completed: newCompletedValue }));
			})
			.catch((e) => setError(e.message))
			.finally(() => {
				setIsUpdating(false);
			});
	};

	const onSubmitNewTitleTodo = (event, id, newTitle) => {
		event.preventDefault();
		handleTodoTitleChange(id, newTitle);
		setEditingTitleTodoID(null);
	};

	const onSelectedOrder = ({ target }) => {
		setSelectedOrder(target.value);
		setIsSorting(!isSorting);
	};

	const onSubmitNewTodo = (event) => {
		event.preventDefault();
		setNewTaskValue('');
		setIsCreating(true);

		fetchCreateTodo(newTaskValue.trim())
			.then((createdTodo) => {
				console.log('The task is created, the server response:', createdTodo);
				setTodos([...todos, createdTodo]);
			})
			.catch((e) => setError(e))
			.finally(() => {
				setIsCreating(false);
			});
	};

	useEffect(() => {
		setError('');

		fetchTodos()
			.then((loadedTodos) => setTodos(loadedTodos))
			.catch((e) => setError(e.message))
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return {
		todos: searchedTodos,
		searchValue,
		setSearchValue,
		isLoading,
		isUpdating,
		isCreating,
		editingTitleTodoID,
		setEditingTitleTodoID,
		error,
		selectedOrder,
		newTaskValue,
		setNewTaskValue,
		handleDeleteTodoBtn,
		handleTodoTitleChange,
		handleTodoCompletedChange,
		onSubmitNewTitleTodo,
		onSelectedOrder,
		onSubmitNewTodo,
	};
};
