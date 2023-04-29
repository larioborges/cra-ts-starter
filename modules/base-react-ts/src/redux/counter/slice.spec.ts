import { ApiStatus, CounterState, PERSISTED_AT_KEY } from 'types';
import { counterSliceReducer, decrement, increment, incrementByAmount } from './slice';

describe('counter reducer', () => {
  const initialState: CounterState = {
    value: 3,
    counterStatus: ApiStatus.INIT,
    [PERSISTED_AT_KEY]: 1000,
  };
  it('should handle initial state', () => {
    expect(counterSliceReducer(initialState, { type: 'unknown' })).toEqual({
      value: 3,
      incrementAsyncStatus: ApiStatus.INIT,
      PERSISTED_AT_KEY: 1000,
    });
  });
  it('should handle increment', () => {
    const actual = counterSliceReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });
  it('should handle decrement', () => {
    const actual = counterSliceReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });
  it('should handle incrementByAmount', () => {
    const actual = counterSliceReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
