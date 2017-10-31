import {combineReducers} from 'redux';
import loginReducer from './login/Reducers';
import { routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
  login: loginReducer,
  routing: routerReducer
});

export default allReducers;