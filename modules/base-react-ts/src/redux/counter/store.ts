import { ApiStatus, CounterState, PERSISTED_AT_KEY } from 'types';

export const initialState: CounterState = {
  value: 0,
  counterStatus: ApiStatus.INIT,
  [PERSISTED_AT_KEY]: Date.now(),
};
