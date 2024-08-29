import { NewTodoForm, SearchTodo, SortTodo } from './components';
import styles from './control-panel.module.css';

export const ControlPanel = () => {
	return (
		<>
			<NewTodoForm />
			<div className={styles.actions}>
				<SearchTodo />
				<SortTodo />
			</div>
		</>
	);
};
