import { useState } from 'react';
import {
	useRequestDeleteTodo,
	useRequestUpdateTodo,
	useRequestGetTodos,
	useDebounce,
} from '../../hooks';
import { SortTodo, SearchTodo, TodoListItem } from '../../components';
import styles from './todo-list.module.css';

export const TodoList = ({ refreshTodosFlag, refreshTodos }) => {
	const [searchValue, setSearchValue] = useState('');
	const [isSorting, setIsSorting] = useState(false);

	const { todos, isLoading } = useRequestGetTodos(refreshTodosFlag, isSorting);
	const { isUpdating, requestUpdateTodo } = useRequestUpdateTodo(refreshTodos);
	const { isDeleting, requestDeleteTodo } = useRequestDeleteTodo(refreshTodos);

	const debouncedValue = useDebounce(searchValue, 1000);

	const searchedTodos = debouncedValue
		? todos.filter((todo) => todo?.title.toLowerCase().includes(searchValue))
		: todos;

	return (
		<>
			<h1>To do list:</h1>
			<div className={styles.actions}>
				<SearchTodo searchValue={searchValue} setSearchValue={setSearchValue} />
				<SortTodo isSorting={isSorting} setIsSorting={setIsSorting} />
			</div>
			<ol className={styles.list}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					searchedTodos.map(({ id, title, completed }) => (
						<TodoListItem
							key={id}
							todoid={id}
							completed={completed}
							isUpdating={isUpdating}
							requestUpdateTodo={requestUpdateTodo}
							isDeleting={isDeleting}
							requestDeleteTodo={requestDeleteTodo}
						>
							{title}
						</TodoListItem>
					))
				)}
			</ol>
		</>
	);
};
