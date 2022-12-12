import { createSelector } from 'reselect';
import { RootState, CounterState, API_STATUS } from 'types';

export const selectCounterState = (state: RootState): CounterState => state.counter;

export const selectCounterValue = createSelector(
	selectCounterState,
	(counterState: CounterState) => counterState.value,
);

export const selectCounterStatus = createSelector(
	selectCounterState,
	(counterState: CounterState) => counterState.counterStatus,
);

export const selectCounterIsBusy = createSelector(
	selectCounterStatus,
	counterStatus => counterStatus === API_STATUS.PENDING,
);
