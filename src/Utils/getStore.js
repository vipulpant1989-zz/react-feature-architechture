import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../containers/rootReducers';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

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

