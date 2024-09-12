import { useState } from 'react';
import { useTodosContext } from '../../context';
import styles from './editing-title-todo.module.css';

export const EditingTitleTodo = ({ id, title }) => {
	const [newTitle, setNewTitle] = useState(title);
	const { setEditingTitleTodoID, onSubmitNewTitleTodo } = useTodosContext();

	const onChangeTitle = ({ target }) => setNewTitle(target.value);

	return (
		<form
			className={styles.edit}
			onSubmit={(event) => onSubmitNewTitleTodo(event, id, newTitle)}
		>
			<input
				className={styles.input}
				type="text"
				value={newTitle}
				onChange={onChangeTitle}
				autoFocus={true}
			/>
			<button
				type="submit"
				className={`${styles.button} ${styles['edit-todo-btn']}`}
			>
				Save
			</button>
			<button
				type="button"
				className={styles.button}
				onClick={() => setEditingTitleTodoID(null)}
			>
				Cancel
			</button>
		</form>
	);
};
