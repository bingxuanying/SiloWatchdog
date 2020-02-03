import userReducer from './user';
import tempReducer from './temp';
import trapInfoReducer from './trapInfo';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  user: userReducer,
  temp: tempReducer,
  trapInfo: trapInfoReducer,
});

export default allReducers;
