import { createSelector } from 'reselect';
import { CounterState, RootState } from 'types';

export const selectCounterState = (state: RootState): CounterState => state.counter;

export const selectCounterValue = createSelector(
  selectCounterState,
  (counterState: CounterState) => counterState.value,
);

export const selectCounterStatus = createSelector(
  selectCounterState,
  (counterState: CounterState) => counterState.counterStatus,
);
