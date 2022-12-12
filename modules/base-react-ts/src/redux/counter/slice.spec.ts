import { counterReducer, decrement, increment, incrementByAmount } from './slice';
import { CounterState, API_STATUS } from 'types';

describe('counter reducer', () => {
	const initialState: CounterState = {
		value: 3,
		counterStatus: API_STATUS.INIT,
	};
	it('should handle initial state', () => {
		expect(counterReducer(initialState, { type: 'unknown' })).toEqual({
			value: 3,
			incrementAsyncStatus: API_STATUS.INIT,
		});
	});
	it('should handle increment', () => {
		const actual = counterReducer(initialState, increment());
		expect(actual.value).toEqual(4);
	});
	it('should handle decrement', () => {
		const actual = counterReducer(initialState, decrement());
		expect(actual.value).toEqual(2);
	});
	it('should handle incrementByAmount', () => {
		const actual = counterReducer(initialState, incrementByAmount(2));
		expect(actual.value).toEqual(5);
	});
});
