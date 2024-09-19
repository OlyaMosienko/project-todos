import { useState } from 'react';
import styles from './sort-todo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSorting } from '../../../../selectors';
import { setIsSorting } from '../../../../actions';

export const SortTodo = () => {
	const [selectedOrder, setSelectedOrder] = useState('default');
	const isSorting = useSelector(selectIsSorting);
	const dispatch = useDispatch();

	const onSelectedOrder = ({ target }) => {
		setSelectedOrder(target.value);
		dispatch(setIsSorting(!isSorting));
	};

	return (
		<select className={styles.sort} value={selectedOrder} onChange={onSelectedOrder}>
			<option value="default">Default</option>
			<option value="asc">ASC</option>
		</select>
	);
};
