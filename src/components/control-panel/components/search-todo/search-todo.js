import { useTodosContext } from '../../../../context';
import styles from './search-todo.module.css';

export const SearchTodo = () => {
	const { searchValue, setSearchValue } = useTodosContext();

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
