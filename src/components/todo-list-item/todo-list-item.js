import styles from './todo-list-item.module.css';

export const TodoListItem = ({ children }) => {
	return <li className={styles.item}>{children}</li>;
};
