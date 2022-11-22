import { API_STATUS } from '../api';

export const initialState: CounterState = {
	value: 0,
	incrementAsyncStatus: API_STATUS.INIT,
};

export interface CounterState {
	value: number;
	incrementAsyncStatus: API_STATUS;
}
