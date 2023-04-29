import { ExpiringPersistedState, PERSISTED_AT_KEY } from 'types';

export const setPersistedAtHandler = (state: ExpiringPersistedState): void => {
  state[PERSISTED_AT_KEY] = Date.now();
};
