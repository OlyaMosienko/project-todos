import { useState, useEffect } from 'react';
import { TodoListItem } from '../todo-list-item/todo-list-item';
import styles from './todo-list.module.css';

export const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<ol className={styles.list}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				todos.map(({ id, title }) => (
					<TodoListItem key={id}>{title}</TodoListItem>
				))
			)}
		</ol>
	);
};
