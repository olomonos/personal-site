import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

export * from './types';

export const history = createHistory();

export const store = createStore(
    reducers, 
    applyMiddleware(thunk, routerMiddleware(history))
);
