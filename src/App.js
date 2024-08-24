import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { MainPage, NotFound, TodoPage } from './pages';

export const App = () => {
	return (
		<>
			<Header />
			<div className="app">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/todo/:id" element={<TodoPage />} />
					<Route path="/404" element={<NotFound />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
};
