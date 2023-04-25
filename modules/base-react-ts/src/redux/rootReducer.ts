import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './app';
import { counterReducer } from './counter';

const rootReducer = combineReducers({
  counter: counterReducer,
  app: appReducer,
});

export default rootReducer;
