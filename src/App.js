import { useState } from 'react';
import { NewTodoForm, TodoList } from './components';
import styles from './App.module.css';

export const App = () => {
	const [todos, setTodos] = useState([]);

	return (
		<div className={styles.app}>
			<NewTodoForm todos={todos} setTodos={setTodos} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};
