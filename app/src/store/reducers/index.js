import userReducer from './user';
import tempReducer from './temp';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  user: userReducer,
  temp: tempReducer,
});

export default allReducers;
