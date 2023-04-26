import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { InitialState } from 'types';

import * as utilities from 'utilities';
import { initialState as appInitialState } from './app';
import { initialState as counterInitialState } from './counter';
import { getPersistedReducer } from './persist';
import rootReducer from './rootReducer';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const configureAppStore = (
  initialState: InitialState = {
    app: appInitialState,
    counter: counterInitialState,
  },
) =>
  configureStore({
    reducer: getPersistedReducer({
      reducer: rootReducer,
      storageKey: 'lario-react',
      encryptionSecret: 'MY-SUPER-SECRET',
      initialState,
      expireSeconds: 10, // TODO Lario this is for test
    }),
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

const store = configureAppStore();
const persistor = persistStore(store);

export { store, persistor };
