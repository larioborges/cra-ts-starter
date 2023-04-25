import { configureStore, Reducer } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
// import expireReducer from 'redux-persist-expire';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import { InitialState } from 'types';

import * as utilities from 'utilities';
import { initialState as appInitialState } from './app';
import { initialState as counterInitialState } from './counter';
import rootReducer from './rootReducer';

const getPersistedReducer = (
  _rootReducer: Reducer,
  rootStorageKey: string,
  encryptionSecret: string,
  initialState: InitialState,
): Reducer => {
  const persistConfig = {
    key: rootStorageKey,
    storage,
    transforms: [
      // expireReducer(rootStorageKey, {
      //   // (Optional) Key to be used for the time relative to which store is to be expired
      //   persistedAtKey: '__persisted_at',
      //   // (Required) Seconds after which store will be expired
      //   expireSeconds: 10, // 600,
      //   // (Optional) State to be used for resetting e.g. provide initial reducer state
      //   expiredState: initialState,
      //   // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey`
      //   // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
      //   autoExpire: false,
      // }),
      encryptTransform({
        // You SHOULD NOT use a single secret key for all users of your application, as this negates any potential security benefits of encrypting the store in the first place.
        // You SHOULD NOT hard-code or generate your secret key anywhere on the client, as this risks exposing the key since the JavaScript source is ultimately accessible to the end-user.
        // If you are only interested in persisting the store over the course of a single session and then invalidating the store, consider using the user's access token or session key as the secret key.
        // For long-term persistence, you will want to use a unique, deterministic key that is provided by the server. For example, the server could derive a hash from the user's ID and a salt (also stored server-side) and then return that hash to the client to use to decrypt the store. Placing this key retrieval behind authentication would prevent someone from accessing the encrypted store data if they are not authenticated as the user.
        secretKey: encryptionSecret,
        onError: (error: Error) => {
          console.log('There has been a problem configuring the secure local storage', error);
          localStorage.clear();
          location.reload();
        },
      }),
    ],
  };

  return persistReducer(persistConfig, _rootReducer);
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const configureAppStore = (
  initialState: InitialState = {
    app: appInitialState,
    counter: counterInitialState,
  },
) =>
  configureStore({
    reducer: getPersistedReducer(rootReducer, 'lario-react', 'MY-SUPER-SECRET', initialState),
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
