export const PERSISTED_AT_KEY = '__persisted_at';

export interface ExpiringPersistedState {
  [PERSISTED_AT_KEY]: number;
}
