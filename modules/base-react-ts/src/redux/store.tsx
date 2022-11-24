import { configureStore, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import * as utilities from 'utilities';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const configureAppStore = (initialState = {}) =>
	configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware: any) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: { utilities },
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

export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, null, AnyAction>;
export type RootState = ReturnType<typeof store.getState>;
