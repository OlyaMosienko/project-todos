import { useTodosContext } from '../../../../context';
import styles from './sort-todo.module.css';

export const SortTodo = () => {
	const { selectedOrder, onSelectedOrder } = useTodosContext();

	return (
		<select className={styles.sort} value={selectedOrder} onChange={onSelectedOrder}>
			<option value="default">Default</option>
			<option value="asc">ASC</option>
		</select>
	);
};
