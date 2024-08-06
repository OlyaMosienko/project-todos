import { useState } from 'react';
import styles from './new-todo-form.module.css';
import { useRequestAddANewTodo } from '../../hooks';

export const NewTodoForm = ({ refreshTodos }) => {
	const [newTaskValue, setNewTaskValue] = useState('');
	const { isCreating, requestAddANewTodo } = useRequestAddANewTodo(
		newTaskValue,
		setNewTaskValue,
		refreshTodos,
	);

	return (
		<form className={styles.form} onSubmit={requestAddANewTodo}>
			<input
				className={styles.input}
				type="text"
				placeholder="Write a new one..."
				value={newTaskValue}
				onChange={({ target }) => setNewTaskValue(target.value)}
			/>
			<button className={styles['form-button']} disabled={isCreating}>
				Add task
			</button>
		</form>
	);
};
