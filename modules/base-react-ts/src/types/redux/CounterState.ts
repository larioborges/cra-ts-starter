import { ApiStatus } from './ApiStatus2';
import { ExpiringPersistedState } from './ExpiringPersistedState';

export interface CounterState extends ExpiringPersistedState {
  value: number;
  counterStatus: ApiStatus;
}
