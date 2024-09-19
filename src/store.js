import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { todosReducer, flagsReducer, errorsReducer, searchReducer } from './reducers';

const reducer = combineReducers({
	todosState: todosReducer,
	flagsState: flagsReducer,
	errorsState: errorsReducer,
	searchState: searchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
