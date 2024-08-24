import { useState, useEffect } from 'react';
import { useDebounce } from '../../hooks';
import { SortTodo, SearchTodo, NewTodoForm } from '../../components';
import { fetchTodos } from '../../api';
import styles from './todo-list.module.css';
import { Link } from 'react-router-dom';

export const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchValue, setSearchValue] = useState('');
	const [isSorting, setIsSorting] = useState(false);
	const [error, setError] = useState('');

	const debouncedValue = useDebounce(searchValue, 2000);

	const searchedTodos = debouncedValue
		? todos.filter((todo) => todo?.title.toLowerCase().includes(searchValue))
		: todos;

	const sortedTodos = isSorting
		? searchedTodos.toSorted((a, b) => (a['title'] > b['title'] ? 1 : -1))
		: searchedTodos;

	useEffect(() => {
		setError('');

		fetchTodos()
			.then((loadedTodos) => setTodos(loadedTodos))
			.catch((e) => setError(e.message))
			.finally(() => {
				setIsLoading(false);
			});
	}, [setIsLoading, setTodos]);

	return (
		<>
			<NewTodoForm todos={todos} setTodos={setTodos} />
			<div className={styles.content}>
				<h1>To do list:</h1>
				<div className={styles.actions}>
					<SearchTodo
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
					<SortTodo isSorting={isSorting} setIsSorting={setIsSorting} />
				</div>
				<ol className={styles.list}>
					{error ? <div className={styles.error}>{error}</div> : null}
					{isLoading ? (
						<div className="loader"></div>
					) : (
						sortedTodos.map(({ id, title, completed }) => (
							<li className={styles.item} key={id}>
								<Link className={styles['item-link']} to={`todo/${id}`}>
									{title}
								</Link>
								{completed && <span>(done)</span>}
							</li>
						))
					)}
				</ol>
			</div>
		</>
	);
};
