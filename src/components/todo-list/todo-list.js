import { TodoListItem } from '../../components';
import { useTodosContext } from '../../context';
import { EditingTitleTodo } from '../editing-title-todo/editing-title-todo';
import styles from './todo-list.module.css';

export const TodoList = () => {
	const { error, isLoading, todos, editingTitleTodoID } = useTodosContext();

	if (isLoading) return <div className={styles.loader}></div>;
	if (error) return <div className={styles.error}>{error}</div>;

	return (
		<ol className={styles.list}>
			<h1>To do list:</h1>
			{todos.map(({ id, title, completed }) =>
				editingTitleTodoID === id ? (
					<EditingTitleTodo key={id} id={id} title={title} />
				) : (
					<TodoListItem key={id} id={id} completed={completed} title={title} />
				),
			)}
		</ol>
	);
};
