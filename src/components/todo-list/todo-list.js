import { useState } from 'react';
import {
	useRequestDeleteTodo,
	useRequestUpdateTodo,
	useRequestGetTodos,
	useDebounce,
} from '../../hooks';
import { SortTodo, SearchTodo, TodoListItem } from '../../components';
import styles from './todo-list.module.css';

export const TodoList = () => {
	const [searchValue, setSearchValue] = useState('');
	const [isSorting, setIsSorting] = useState(false);

	const { todos, isLoading } = useRequestGetTodos();
	const { isUpdating, requestUpdateTodo } = useRequestUpdateTodo();
	const { isDeleting, requestDeleteTodo } = useRequestDeleteTodo();

	const debouncedValue = useDebounce(searchValue, 1000);

	const searchedTodos = debouncedValue
		? Object.values(todos).filter((todo) =>
				todo?.title.toLowerCase().includes(searchValue),
			)
		: todos;

	const sortedTodos = isSorting
		? Object.values(searchedTodos).sort((a, b) => a.title.localeCompare(b.title))
		: searchedTodos;

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
					Object.entries(sortedTodos).map(([id, { title, completed }]) => (
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
