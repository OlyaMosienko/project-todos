import { useDispatch, useSelector } from 'react-redux';
import { selectSearchValue } from '../../../../selectors';
import { setSearchValue } from '../../../../actions';
import styles from './search-todo.module.css';

export const SearchTodo = () => {
	const searchValue = useSelector(selectSearchValue);

	const dispatch = useDispatch();

	return (
		<input
			className={styles.input}
			type="text"
			value={searchValue}
			onChange={({ target }) => {
				dispatch(setSearchValue(target.value));
			}}
			placeholder="Search todo..."
		/>
	);
};
