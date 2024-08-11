import { useState } from 'react';
import { NewTodoForm, TodoList } from './components';
import styles from './App.module.css';

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	return (
		<div className={styles.app}>
			<NewTodoForm refreshTodos={refreshTodos} />
			<TodoList
				refreshTodosFlag={refreshTodosFlag}
				setRefreshTodosFlag={setRefreshTodosFlag}
				refreshTodos={refreshTodos}
			/>
		</div>
	);
};
