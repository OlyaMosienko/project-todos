import styles from './search-todo.module.css';

export const SearchTodo = ({ searchValue, setSearchValue }) => {
	return (
		<input
			className={styles.input}
			type="text"
			value={searchValue}
			onChange={({ target }) => {
				setSearchValue(target.value);
			}}
			placeholder="Search todo..."
		/>
	);
};
