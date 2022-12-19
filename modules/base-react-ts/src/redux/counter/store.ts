import { CounterState, API_STATUS } from 'types';

export const initialState: CounterState = {
	value: 0,
	counterStatus: API_STATUS.INIT,
};
