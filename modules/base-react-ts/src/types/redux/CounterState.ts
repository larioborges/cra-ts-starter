import { ApiStatus } from './ApiStatus';
import { ExpiringPersistedState } from './ExpiringPersistedState';

export interface CounterState extends ExpiringPersistedState {
  value: number;
  counterStatus: ApiStatus;
}
