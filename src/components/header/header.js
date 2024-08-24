import { NavLink, useMatch, useNavigate } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
	const urlMatchData = useMatch('/todo/:id');
	const navigate = useNavigate();

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles['nav-list']}>
					{urlMatchData && (
						<li>
							<button
								className={styles['back-btn']}
								onClick={() => navigate(-1)}
							>
								&#x2b05;&#xfe0f; <span>Back</span>
							</button>
						</li>
					)}
					<li>
						<NavLink className={styles['nav-link']} to="/">
							{({ isActive }) =>
								isActive ? (
									<>
										&#x1f3e0; <span>Home</span>
									</>
								) : (
									<span>Home</span>
								)
							}
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
