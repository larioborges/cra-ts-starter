import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api';
import { appReducer } from './app';
import { counterReducer } from './counter';

const rootReducer = combineReducers({
  counter: counterReducer,
  app: appReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
