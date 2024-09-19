import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCreating } from '../../../../selectors';
import { createTodo } from '../../../../actions';
import styles from './new-todo-form.module.css';

export const NewTodoForm = () => {
	const [newTaskValue, setNewTaskValue] = useState('');

	const isCreating = useSelector(selectIsCreating);
	const dispatch = useDispatch();

	const onSubmitNewTodo = (event, newTaskValue) => {
		event.preventDefault();
		setNewTaskValue('');

		dispatch(createTodo(newTaskValue));
	};
	const onChange = ({ target }) => setNewTaskValue(target.value);

	return (
		<>
			<form
				className={styles.form}
				onSubmit={(event) => onSubmitNewTodo(event, newTaskValue)}
			>
				<input
					className={styles.input}
					type="text"
					placeholder="Write a new one..."
					value={newTaskValue}
					onChange={onChange}
				/>
				<button className={styles['form-button']} disabled={isCreating}>
					Add task
				</button>
			</form>
		</>
	);
};
