import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TodoListItem } from '../../components';
import { fetchTodo } from '../../api';

export const TodoPage = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [todo, setTodo] = useState(null);
	const [isLoadingTodo, setIsLoadingTodo] = useState(true);

	useEffect(() => {
		fetchTodo(params.id)
			.then((loadedTodo) => {
				if (!loadedTodo) {
					navigate('/404');
					return;
				}
				setTodo(loadedTodo);
			})
			.catch(() => navigate('/404'))
			.finally(() => setIsLoadingTodo(false));
	}, [navigate, params.id]);

	if (!todo) {
		if (isLoadingTodo) {
			return <div className="loader"></div>;
		}
		return null;
	}

	const { id, title, completed } = todo;

	return (
		<TodoListItem id={id} completed={completed} todo={todo} setTodo={setTodo}>
			{title}
		</TodoListItem>
	);
};
