// index.js

import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userReducer,
  // Other reducers go here if you have more resources
});

export default rootReducer;
