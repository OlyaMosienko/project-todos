import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../actions';
import {
	selectTodos,
	selectIsLoading,
	selectError,
	selectEditingTitleID,
	selectIsSorting,
	selectSearchValue,
} from '../../selectors';
import { TodoListItem, EditingTitleTodo } from '../../components';
import { useDebounce } from '../../hooks/use-debounce';
import styles from './todo-list.module.css';

export const TodoList = () => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(getTodos), [dispatch]);

	const todos = useSelector(selectTodos);
	const isLoading = useSelector(selectIsLoading);
	const isSorting = useSelector(selectIsSorting);
	const error = useSelector(selectError);
	const editingTitleTodoID = useSelector(selectEditingTitleID);
	const searchValue = useSelector(selectSearchValue);

	const debouncedValue = useDebounce(searchValue, 2000);

	const filteredTodos = debouncedValue
		? todos.filter((todo) =>
				todo?.title.toLowerCase().includes(debouncedValue.toLowerCase()),
			)
		: isSorting
			? todos.toSorted((a, b) => (a['title'] > b['title'] ? 1 : -1))
			: todos;

	if (isLoading) return <div className={styles.loader}></div>;
	if (error) return <div className={styles.error}>{error}</div>;

	return (
		<ol className={styles.list}>
			<h1>To do list:</h1>
			{filteredTodos.map(({ id, title, completed }) =>
				editingTitleTodoID === id ? (
					<EditingTitleTodo key={id} id={id} title={title} />
				) : (
					<TodoListItem key={id} id={id} completed={completed} title={title} />
				),
			)}
		</ol>
	);
};
