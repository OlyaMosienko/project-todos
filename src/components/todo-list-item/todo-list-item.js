import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsUpdating } from '../../selectors';
import { deleteTodo, setEditingTitleTodoID, updateTodo } from '../../actions';
import styles from './todo-list-item.module.css';

export const TodoListItem = ({ id, title, completed }) => {
	const [completedTodoValue, setCompletedTodoValue] = useState(completed);
	const isUpdating = useSelector(selectIsUpdating);
	const dispatch = useDispatch();

	return (
		<li className={styles.item + ` ${isUpdating ? styles['item-updating'] : ''}`}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completedTodoValue}
				onChange={() => {
					setCompletedTodoValue(!completedTodoValue);
					dispatch(updateTodo({ id, title, completed: !completedTodoValue }));
				}}
			/>
			<div
				className={styles['item-content']}
				onClick={() => dispatch(setEditingTitleTodoID(id))}
			>
				<span>{title}</span>
			</div>
			<button
				className={`${styles.button} ${styles['delete-todo-btn']}`}
				disabled={isUpdating}
				onClick={() => dispatch(deleteTodo(id))}
			>
				Delete
			</button>
		</li>
	);
};
