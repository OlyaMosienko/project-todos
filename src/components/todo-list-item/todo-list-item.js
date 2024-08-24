import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDeleteTodo, fetchUpdateTodo } from '../../api/api';
import styles from './todo-list-item.module.css';

export const TodoListItem = ({ id, children, completed, todo, setTodo }) => {
	const [newTitle, setNewTitle] = useState(children);
	const [completedTodoValue, setCompletedTodoValue] = useState(completed);
	const [isEditingTodoTitle, setIsEditingTodoTitle] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [errorTodoMessage, setErrorTodoMessage] = useState('');

	const navigate = useNavigate();

	const handleDeleteTodoBtn = (id) => {
		setErrorTodoMessage('');
		setIsDeleting(true);

		fetchDeleteTodo(id)
			.then((response) => {
				console.log('The task is deleted, the server response:', response);
			})
			.catch((e) => setErrorTodoMessage(e.message))
			.finally(() => {
				setIsDeleting(false);
				navigate('/');
			});
	};

	const handleTodoTitleChange = (id, newTitle) => {
		setErrorTodoMessage('');
		setIsUpdating(true);

		fetchUpdateTodo({ id, title: newTitle })
			.then((response) => {
				console.log('The task is updated, the server response:', response);
				setTodo({ ...todo, title: newTitle });
			})
			.catch((e) => setErrorTodoMessage(e.message))
			.finally(() => {
				setIsUpdating(false);
			});
	};

	const handleTodoCompletedChange = (id, newCompletedValue) => {
		setErrorTodoMessage('');
		setIsUpdating(true);

		fetchUpdateTodo({ id, completed: newCompletedValue })
			.then((response) => {
				console.log('The task is updated, the server response:', response);
				setTodo({ ...todo, completed: newCompletedValue });
			})
			.catch((e) => setErrorTodoMessage(e.message))
			.finally(() => {
				setIsUpdating(false);
			});
	};

	const onChangeTitle = ({ target }) => setNewTitle(target.value);

	const onSaveTitleTodo = (id, newTitle) => {
		setIsEditingTodoTitle(false);
		handleTodoTitleChange(id, newTitle);
	};

	return (
		<>
			{errorTodoMessage ? (
				<div className={styles.error}>{errorTodoMessage}</div>
			) : null}

			<h1>Todo #{id}</h1>
			<div
				className={styles.item + ` ${isUpdating ? styles['item-updating'] : ''}`}
			>
				<div className={styles.buttons}>
					<input
						className={styles.checkbox}
						type="checkbox"
						checked={completedTodoValue}
						onChange={() => {
							setCompletedTodoValue(!completedTodoValue);
							handleTodoCompletedChange(id, !completedTodoValue);
						}}
					/>
					{isEditingTodoTitle ? (
						<button
							className={`${styles.button} ${styles['edit-todo-btn']}`}
							disabled={isDeleting}
							onClick={() => onSaveTitleTodo(id, newTitle)}
						>
							Save
						</button>
					) : null}
					<button
						className={`${styles.button} ${styles['delete-todo-btn']}`}
						disabled={isDeleting}
						onClick={() => handleDeleteTodoBtn(id)}
					>
						Delete
					</button>
				</div>
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
			</div>
		</>
	);
};
