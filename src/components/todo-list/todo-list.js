import { useState, useEffect } from 'react';
import { useDebounce } from '../../hooks';
import { SortTodo, SearchTodo, TodoListItem } from '../../components';
import { fetchTodos, fetchDeleteTodo, fetchUpdateTodo } from '../../api/api';
import { setTodoInTodos } from '../../utils';
import styles from './todo-list.module.css';

export const TodoList = ({ todos, setTodos }) => {
	const [searchValue, setSearchValue] = useState('');
	const [isSorting, setIsSorting] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isUpdating, setIsUpdating] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [error, setError] = useState('');

	const debouncedValue = useDebounce(searchValue, 2000);

	const searchedTodos = debouncedValue
		? todos.filter((todo) => todo?.title.toLowerCase().includes(searchValue))
		: todos;

	const sortedTodos = isSorting
		? searchedTodos.toSorted((a, b) => (a['title'] > b['title'] ? 1 : -1))
		: searchedTodos;

	const handleDeleteTodoBtn = (todoid) => {
		setError('');
		setIsDeleting(true);

		fetchDeleteTodo(todoid)
			.then((response) => {
				console.log('The task is deleted, the server response:', response);
				setTodos(todos.filter(({ id }) => id !== todoid));
			})
			.catch((e) => setError(e.message))
			.finally(() => {
				setIsDeleting(false);
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

	useEffect(() => {
		setError('');

		fetchTodos()
			.then((loadedTodos) => setTodos(loadedTodos))
			.catch((e) => setError(e.message))
			.finally(() => {
				setIsLoading(false);
			});
	}, [setTodos]);

	return (
		<div className={styles.content}>
			<h1>To do list:</h1>
			<div className={styles.actions}>
				<SearchTodo searchValue={searchValue} setSearchValue={setSearchValue} />
				<SortTodo isSorting={isSorting} setIsSorting={setIsSorting} />
			</div>
			<ol className={styles.list}>
				{error ? <div className={styles.error}>{error}</div> : null}
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					sortedTodos.map(({ id, title, completed }) => (
						<TodoListItem
							key={id}
							todoid={id}
							completed={completed}
							isUpdating={isUpdating}
							isDeleting={isDeleting}
							handleDeleteTodoBtn={handleDeleteTodoBtn}
							handleTodoTitleChange={handleTodoTitleChange}
							handleTodoCompletedChange={handleTodoCompletedChange}
						>
							{title}
						</TodoListItem>
					))
				)}
			</ol>
		</div>
	);
};
