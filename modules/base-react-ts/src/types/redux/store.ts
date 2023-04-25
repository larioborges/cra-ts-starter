import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { store } from 'redux/store';
import { AppState } from './app';
import { CounterState } from './counter';

export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, null, AnyAction>;
export type RootState = ReturnType<typeof store.getState>;
export interface InitialState {
  app: AppState;
  counter: CounterState;
}
