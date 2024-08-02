import { TodoList } from './components';
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<h1>To do list:</h1>
			<TodoList />
		</div>
	);
};
