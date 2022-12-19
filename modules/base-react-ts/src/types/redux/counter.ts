import { API_STATUS } from './apiStatus';

export interface CounterState {
	value: number;
	counterStatus: API_STATUS;
}
