import { useState } from 'react';
import styles from './todo-list-item.module.css';

export const TodoListItem = ({
	children,
	todoid,
	completed,
	isUpdating,
	isDeleting,
	handleDeleteTodoBtn,
	handleTodoTitleChange,
	handleTodoCompletedChange,
}) => {
	const [completedTodoValue, setCompletedTodoValue] = useState(completed);
	const [isEditingTodoTitle, setIsEditingTodoTitle] = useState(false);
	const [newTitle, setNewTitle] = useState(children);

	const onChangeTitle = ({ target }) => {
		setNewTitle(target.value);
	};
	const onSaveTitleTodo = (id, newTitle) => {
		setIsEditingTodoTitle(false);
		handleTodoTitleChange(id, newTitle);
	};

	return (
		<li className={styles.item + ` ${isUpdating ? styles['item-updating'] : ''}`}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completedTodoValue}
				onChange={() => {
					setCompletedTodoValue(!completedTodoValue);
					handleTodoCompletedChange(todoid, !completedTodoValue);
				}}
			/>
			<div
				className={styles['item-content']}
				onClick={() => setIsEditingTodoTitle(true)}
			>
				{isEditingTodoTitle ? (
					<input
						className={styles.input}
						type="text"
						value={newTitle}
						onChange={onChangeTitle}
					/>
				) : (
					<span className={completed ? styles.done : ''}>{newTitle}</span>
				)}
			</div>
			<div className={styles.buttons}>
				{isEditingTodoTitle ? (
					<button
						className={`${styles.button} ${styles['edit-todo-btn']}`}
						disabled={isDeleting}
						onClick={() => onSaveTitleTodo(todoid, newTitle)}
					>
						Save
					</button>
				) : null}
				<button
					className={`${styles.button} ${styles['delete-todo-btn']}`}
					disabled={isDeleting}
					onClick={() => handleDeleteTodoBtn(todoid)}
				>
					Delete
				</button>
			</div>
		</li>
	);
};
