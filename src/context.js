import { createContext, useContext } from 'react';
import { useTodos } from './hooks';

const AppContext = createContext(null);

export const TodosProvider = ({ children }) => (
	<AppContext.Provider value={useTodos()}>{children}</AppContext.Provider>
);

export const useTodosContext = () => {
	const context = useContext(AppContext);

	if (!context) throw new Error('Can not use provider without context');

	return context;
};
