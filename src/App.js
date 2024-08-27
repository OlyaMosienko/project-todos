import { useState } from 'react';
import { AppContext } from './context';
import { TodoList } from './components';
import { reducer } from './utils';
import styles from './App.module.css';

export const App = () => {
	const [todos, setTodos] = useState([]);

	const dispatch = (action) => {
		const newState = reducer(todos, action);
		setTodos(newState);
	};

	return (
		<AppContext.Provider value={{ todos, dispatch }}>
			<div className={styles.app}>
				<TodoList />
			</div>
		</AppContext.Provider>
	);
};
