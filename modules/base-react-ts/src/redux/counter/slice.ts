import { createAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API_STATUS, CounterState } from 'types';
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
        fulfillWithValue(API_STATUS.FULFILLED);
      } catch (e: ErrorEvent | any) {
        rejectWithValue(API_STATUS.REJECTED);
      }
    }),
);

export const decrementAsync = createAsyncThunk(
  'counter/decrementAsyncementAsync',
  async (_, { fulfillWithValue, rejectWithValue, dispatch, extra, getState }: any) =>
    extra.utilities.debounce(() => {
      try {
        dispatch(decrement());
        fulfillWithValue(API_STATUS.FULFILLED);
      } catch (e: ErrorEvent | any) {
        console.log(e);
        debugger;
        rejectWithValue(API_STATUS.REJECTED);
      }
    }),
);

export const incrementByAmountAsync = createAsyncThunk(
  'counter/incrementAsyncByAmount',
  (amount: number, { fulfillWithValue, rejectWithValue, dispatch, extra, getState }: any): void =>
    extra.utilities.debounce(() => {
      try {
        dispatch(incrementByAmount(amount));
        fulfillWithValue(API_STATUS.FULFILLED);
      } catch (e: ErrorEvent | any) {
        debugger;
        rejectWithValue(API_STATUS.REJECTED);
      }
    }),
);

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
      .addCase(incrementAsync.pending, (state: CounterState): void => {
        state.counterStatus = API_STATUS.PENDING;
      })
      .addCase(incrementAsync.fulfilled, (state: CounterState): void => {
        state.counterStatus = API_STATUS.FULFILLED;
      })
      .addCase(incrementAsync.rejected, (state: CounterState): void => {
        state.counterStatus = API_STATUS.REJECTED;
      });
  },
});

export const counterSliceReducer = counterSlice.reducer;
