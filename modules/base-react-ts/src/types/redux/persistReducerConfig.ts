import { Reducer } from '@reduxjs/toolkit';

export interface PersistReducerConfig {
  reducer: Reducer;
  storageKey: string;
  initialState?: any;
  encryptionSecret?: string;
  expireSeconds?: number;
}
