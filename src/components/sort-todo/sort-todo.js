import { useState } from 'react';
import styles from './sort-todo.module.css';

export const SortTodo = ({ isSorting, setIsSorting }) => {
	const [selectedOrder, setSelectedOrder] = useState('default');

	const onSelectedOrder = ({ target }) => {
		setSelectedOrder(target.value);
		setIsSorting(!isSorting);
	};

	return (
		<select className={styles.sort} value={selectedOrder} onChange={onSelectedOrder}>
			<option value="default">Default</option>
			<option value="asc">ASC</option>
		</select>
	);
};
