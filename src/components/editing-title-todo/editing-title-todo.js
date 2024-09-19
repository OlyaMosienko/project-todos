import { useState } from 'react';
import styles from './editing-title-todo.module.css';
import { useDispatch } from 'react-redux';
import { setEditingTitleTodoID, updateTodo } from '../../actions';

export const EditingTitleTodo = ({ id, title }) => {
	const [newTitle, setNewTitle] = useState(title);

	const dispatch = useDispatch();
	const onSubmitNewTitleTodo = (event, id, newTitle) => {
		event.preventDefault();
		dispatch(updateTodo({ id, title: newTitle }));
		dispatch(setEditingTitleTodoID(null));
	};
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
				onClick={() => dispatch(setEditingTitleTodoID(null))}
			>
				Cancel
			</button>
		</form>
	);
};
