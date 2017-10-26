import {combineReducers} from 'redux';
import loginReducer from './login/Reducers';

const allReducers = combineReducers({
  login: loginReducer,
});

export default allReducers;