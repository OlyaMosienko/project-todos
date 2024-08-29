import { useState } from 'react';
import { useTodosContext } from '../../context';
import { EditingTitleTodo } from '../editing-title-todo/editing-title-todo';
import styles from './todo-list-item.module.css';

export const TodoListItem = ({ id, title, completed }) => {
	const {
		isUpdating,
		handleDeleteTodoBtn,
		handleTodoCompletedChange,
		isEditingTitleTodoID,
		setIsEditingTodoTitle,
		onSubmitNewTitleTodo,
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
			{isEditingTitleTodoID[id] ? (
				<EditingTitleTodo
					id={id}
					title={title}
					setIsEditingTodoTitle={setIsEditingTodoTitle}
					onSubmitNewTitleTodo={onSubmitNewTitleTodo}
				/>
			) : (
				<>
					<div
						className={styles['item-content']}
						onClick={() => setIsEditingTodoTitle(id, true)}
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
				</>
			)}
		</li>
	);
};
