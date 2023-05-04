import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { InitialState } from 'types';

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import * as utilities from 'utilities';
import { api } from './api';
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
    // reducer: rootReducer,
    // TODO Lario: have example encrypted store
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
      }).concat(api.middleware),
    // .concat(createLogger)
    // .concat(),
    preloadedState: initialState,
    devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true',
  });

const store = configureAppStore();
const persistor = persistStore(store);

// TODO Lario: set up data refetch
setupListeners(store.dispatch);

export { store, persistor };
