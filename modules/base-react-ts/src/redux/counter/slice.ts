import { createAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API_STATUS } from 'redux/api';
import { withPayloadType } from 'utilities';
import { CounterState, initialState } from './store';

export const COUNTER_NAMESPACE = 'counter';

export const increment = createAction(`${COUNTER_NAMESPACE}/increment`);
export const decrement = createAction(`${COUNTER_NAMESPACE}/decrement`);
export const incrementByAmount = createAction(`${COUNTER_NAMESPACE}/incrementByAmount`, withPayloadType<number>());

export const incrementAsync = createAsyncThunk(
	'counter/incrementAsync',
	async (_, { fulfillWithValue, rejectWithValue, dispatch, extra, getState }) => {
		try {
			dispatch(increment());
			fulfillWithValue<API_STATUS>(API_STATUS.FULFILLED);
		} catch (e: ErrorEvent | any) {
			rejectWithValue(API_STATUS.FAILED);
		}
	},
);

export const decrementAsync = createAsyncThunk(
	'counter/decrementAsyncementAsync',
	async (_, { fulfillWithValue, rejectWithValue, dispatch, extra, getState }) => {
		try {
			dispatch(decrement());
			fulfillWithValue<API_STATUS>(API_STATUS.FULFILLED);
		} catch (e: ErrorEvent | any) {
			rejectWithValue(API_STATUS.FAILED);
		}
	},
);

export const incrementByAmountAsync = createAsyncThunk(
	'counter/incrementAsyncByAmount',
	(amount: number, { fulfillWithValue, rejectWithValue, dispatch, extra, getState }: any): void =>
		extra.utilities.delayFunc(() => {
			try {
				dispatch(incrementByAmount(amount));
				fulfillWithValue(API_STATUS.FULFILLED);
			} catch (e: ErrorEvent | any) {
				rejectWithValue(API_STATUS.FAILED);
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
			.addCase(incrementAsync.pending, (state: CounterState, action: PayloadAction<any>): void => {
				state.incrementAsyncStatus = action.payload;
			})
			.addCase(incrementAsync.fulfilled, (state: CounterState, action: PayloadAction<any>): void => {
				state.incrementAsyncStatus = action.payload;
			})
			.addCase(incrementAsync.rejected, (state: CounterState, action: PayloadAction<any>): void => {
				state.incrementAsyncStatus = action.payload;
			});
	},
});

export const counterReducer = counterSlice.reducer;
