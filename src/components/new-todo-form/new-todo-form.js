import { useState, useContext } from 'react';
import { AppContext } from '../../context';
import { fetchCreateTodo } from '../../api/api';
import styles from './new-todo-form.module.css';

export const NewTodoForm = () => {
	const { dispatch } = useContext(AppContext);
	const [newTaskValue, setNewTaskValue] = useState('');
	const [isCreating, setIsCreating] = useState(false);
	const [newTodoError, setNewTodoError] = useState('');

	const onSubmitNewTodo = (event) => {
		event.preventDefault();
		setNewTaskValue('');
		setIsCreating(true);

		fetchCreateTodo(newTaskValue)
			.then((createdTodo) => {
				console.log('The task is created, the server response:', createdTodo);
				dispatch({ type: 'CREATE_NEW_TODO_IN_TODOS', payload: createdTodo });
			})
			.catch((e) => setNewTodoError(e))
			.finally(() => {
				setIsCreating(false);
			});
	};

	const onChange = ({ target }) => {
		if (target.value.trim().length === 0) {
			setNewTodoError('Can not create empty todo.');
		} else {
			setNewTodoError('');
		}
		setNewTaskValue(target.value);
	};

	const onBlur = () => setNewTodoError('');

	return (
		<>
			<form className={styles.form} onSubmit={onSubmitNewTodo}>
				<input
					className={styles.input}
					type="text"
					placeholder="Write a new one..."
					value={newTaskValue}
					onChange={onChange}
					onBlur={onBlur}
				/>
				<button className={styles['form-button']} disabled={isCreating}>
					Add task
				</button>
			</form>
			{newTodoError && <div className={styles.error}>{newTodoError}</div>}
		</>
	);
};
