import { useEffect, useRef, useState } from 'react';
import styles from './editing-title-todo.module.css';

export const EditingTitleTodo = ({
	id,
	title,
	setIsEditingTodoTitle,
	onSubmitNewTitleTodo,
}) => {
	const [newTitle, setNewTitle] = useState(title);

	const ref = useRef(null);

	useEffect(() => {
		ref.current.focus();
	}, []);

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
				ref={ref}
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
				onClick={() => setIsEditingTodoTitle(id, false)}
			>
				Cancel
			</button>
		</form>
	);
};
