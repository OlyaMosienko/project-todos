import { ControlPanel, TodoList } from './components';
import styles from './App.module.css';

export const App = () => (
	<div className={styles.app}>
		<ControlPanel />
		<TodoList />
	</div>
);
