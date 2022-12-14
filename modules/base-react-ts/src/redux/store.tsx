import { configureStore } from '@reduxjs/toolkit';
import * as utilities from 'utilities';
import { initialState as appInitialState } from './app';
import { initialState as counterInitialState } from './counter';
import rootReducer from './rootReducer';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const configureAppStore = (
  initialState = {
    app: appInitialState,
    counter: counterInitialState,
  },
) =>
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
