import { RootState } from 'redux/store';
import { CounterState } from './store';
import { createSelector } from 'reselect';

export const selectCounterState = (state: RootState): CounterState => state.counter;

export const selectCounterValue = createSelector(
	selectCounterState,
	(counterState: CounterState) => counterState.value,
);
