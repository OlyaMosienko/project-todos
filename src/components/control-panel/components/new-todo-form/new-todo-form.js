import { useTodosContext } from '../../../../context';
import styles from './new-todo-form.module.css';

export const NewTodoForm = () => {
	const { newTaskValue, setNewTaskValue, onSubmitNewTodo, isCreating } =
		useTodosContext();

	const onChange = ({ target }) => setNewTaskValue(target.value);

	return (
		<>
			<form className={styles.form} onSubmit={onSubmitNewTodo}>
				<input
					className={styles.input}
					type="text"
					placeholder="Write a new one..."
					value={newTaskValue}
					onChange={onChange}
				/>
				<button className={styles['form-button']} disabled={isCreating}>
					Add task
				</button>
			</form>
		</>
	);
};
