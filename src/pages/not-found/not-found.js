import { Link } from 'react-router-dom';
import styles from './not-fount.module.css';

export const NotFound = () => {
	return (
		<div>
			<h1>&#128126; Page not found</h1>
			<Link className={styles['home-btn']} to="/">
				Return home
			</Link>
		</div>
	);
};
