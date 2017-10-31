import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../containers/rootReducers';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import history from './getHistory';

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);

const initialState = {
  login :{}
}

export default function getStore(initialState = initialState, middleware = [thunk , historyMiddleware]){

    return createStore(rootReducer, initialState, compose(
        applyMiddleware.apply(this, middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}

