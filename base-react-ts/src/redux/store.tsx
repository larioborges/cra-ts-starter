import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import * as util from 'utilities';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const configureAppStore = (initialState = {}) =>
	configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware: any) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: { util },
				},
				serializableCheck: true,
				immutableCheck: true,
			}),
		// .concat(createLogger)
		// .concat(),
		preloadedState: initialState,
		devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true',
	});

export const store = configureAppStore();
