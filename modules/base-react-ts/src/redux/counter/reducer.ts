import { getPersistedReducer } from 'redux/persist';
import { PersistReducerConfig } from 'types';
import { COUNTER_NAMESPACE, counterSliceReducer } from './slice';
import { initialState } from './store';

const persistConfig: PersistReducerConfig = {
  reducer: counterSliceReducer,
  storageKey: COUNTER_NAMESPACE,
  // encryptionSecret: 'MY-SUPER-SECRET',
  initialState,
  expireSeconds: 10, // TODO Lario this is for test
};

export const counterReducer = getPersistedReducer(persistConfig);
