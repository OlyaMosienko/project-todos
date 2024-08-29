import { TodoListItem } from '../../components';
import { useTodosContext } from '../../context';
import styles from './todo-list.module.css';

export const TodoList = () => {
	const { error, isLoading, todos } = useTodosContext();

	if (isLoading) return <div className={styles.loader}></div>;
	if (error) return <div className={styles.error}>{error}</div>;

	return (
		<ol className={styles.list}>
			<h1>To do list:</h1>
			{todos.map(({ id, title, completed }) => (
				<TodoListItem key={id} id={id} completed={completed} title={title} />
			))}
		</ol>
	);
};
