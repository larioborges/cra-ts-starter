import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { store } from 'redux/store';

export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, null, AnyAction>;
export type RootState = ReturnType<typeof store.getState>;
