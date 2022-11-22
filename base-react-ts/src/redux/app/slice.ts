import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, initialState } from './store';

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setAppLoading: (state: AppState, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		setAuthToken: (state: AppState, action: PayloadAction<string>) => {
			state.authToken = action.payload;
		},
	},
});

export const { setAppLoading, setAuthToken } = appSlice.actions;
export const appReducer = appSlice.reducer;
