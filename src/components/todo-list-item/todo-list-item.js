import { useState } from 'react';
import { useTodosContext } from '../../context';
import styles from './todo-list-item.module.css';

export const TodoListItem = ({ id, title, completed }) => {
	const {
		isUpdating,
		handleDeleteTodoBtn,
		handleTodoCompletedChange,
		setEditingTitleTodoID,
	} = useTodosContext();

	const [completedTodoValue, setCompletedTodoValue] = useState(completed);

	return (
		<li className={styles.item + ` ${isUpdating ? styles['item-updating'] : ''}`}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completedTodoValue}
				onChange={() => {
					setCompletedTodoValue(!completedTodoValue);
					handleTodoCompletedChange(id, !completedTodoValue);
				}}
			/>
			<div
				className={styles['item-content']}
				onClick={() => setEditingTitleTodoID(id)}
			>
				<span className={completed ? styles.done : ''}>{title}</span>
			</div>
			<button
				className={`${styles.button} ${styles['delete-todo-btn']}`}
				disabled={isUpdating}
				onClick={() => handleDeleteTodoBtn(id)}
			>
				Delete
			</button>
		</li>
	);
};
