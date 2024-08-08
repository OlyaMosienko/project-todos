import { NewTodoForm, TodoList } from './components';
import styles from './App.module.css';

export const App = () => (
	<div className={styles.app}>
		<NewTodoForm />
		<TodoList />
	</div>
);
