import styles from './todo-list-item.module.css';

export const TodoListItem = ({
	children,
	todoid,
	completed,
	requestUpdateTodo,
	isUpdating,
	isDeleting,
	requestDeleteTodo,
}) => {
	return (
		<li
			className={
				isUpdating ? `${styles.item} ${styles['item-updating']}` : styles.item
			}
		>
			<div className={styles['item-content']}>
				{children}
				<div className={styles.buttons}>
					<button
						className={
							completed
								? `${styles.button} ${styles.completed}`
								: styles.button
						}
						disabled={isUpdating}
						onClick={() => requestUpdateTodo(todoid, completed)}
					>
						{completed ? 'Done' : 'Do it'}
					</button>
					<button
						className={`${styles.button} ${styles['delete-todo-btn']}`}
						disabled={isDeleting}
						onClick={() => requestDeleteTodo(todoid)}
					>
						Delete
					</button>
				</div>
			</div>
		</li>
	);
};
