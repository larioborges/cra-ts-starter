import {
  AnyAction,
  createAction,
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit';
import { setPersistedAtHandler } from 'redux/persist';
import { ApiStatus, CounterState } from 'types';
import { withPayloadType } from 'utilities';
import { initialState } from './store';

export const COUNTER_NAMESPACE = 'counter';

export const increment = createAction(`${COUNTER_NAMESPACE}/increment`);
export const decrement = createAction(`${COUNTER_NAMESPACE}/decrement`);
export const incrementByAmount = createAction(`${COUNTER_NAMESPACE}/incrementByAmount`, withPayloadType<number>());

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (_, { fulfillWithValue, rejectWithValue, dispatch, extra, getState, signal }: any) =>
    extra.utilities.debounce(() => {
      try {
        dispatch(increment());
        fulfillWithValue(ApiStatus.FULFILLED);
      } catch (e: ErrorEvent | any) {
        rejectWithValue(ApiStatus.REJECTED);
      }
    }),
);

export const decrementAsync = createAsyncThunk(
  'counter/decrementAsyncementAsync',
  async (_, { fulfillWithValue, rejectWithValue, dispatch, extra, getState }: any) =>
    extra.utilities.debounce(() => {
      try {
        dispatch(decrement());
        fulfillWithValue(ApiStatus.FULFILLED);
      } catch (e: ErrorEvent | any) {
        console.log(e);
        debugger;
        rejectWithValue(ApiStatus.REJECTED);
      }
    }),
);

const isCounterAction = (action: AnyAction): boolean => action.type.startsWith('counter/');
const isAsyncPendingAction = isPending(decrementAsync, incrementAsync);
const isAsyncFulfilledAction = isFulfilled(decrementAsync, incrementAsync);
const isAsyncRejectedAction = isRejected(decrementAsync, incrementAsync);

export const counterSlice = createSlice({
  name: COUNTER_NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(increment, (state: CounterState): void => {
        state.value += 1;
      })
      .addCase(decrement, (state: CounterState): void => {
        state.value -= 1;
      })
      .addCase(incrementByAmount, (state: CounterState, action: PayloadAction<number>): void => {
        if (action.payload !== 0) state.value += action.payload;
      })
      .addMatcher(isAsyncPendingAction, (state: CounterState): void => {
        state.counterStatus = ApiStatus.PENDING;
      })
      .addMatcher(isAsyncFulfilledAction, (state: CounterState): void => {
        state.counterStatus = ApiStatus.FULFILLED;
      })
      .addMatcher(isAsyncRejectedAction, (state: CounterState): void => {
        state.counterStatus = ApiStatus.REJECTED;
      })
      .addMatcher(isCounterAction, setPersistedAtHandler);
  },
});

export const counterSliceReducer = counterSlice.reducer;
