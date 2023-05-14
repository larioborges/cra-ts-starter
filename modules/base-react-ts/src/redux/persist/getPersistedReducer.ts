import { Reducer } from '@reduxjs/toolkit';
import expireReducer from 'redux-persist-expire';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { PERSISTED_AT_KEY } from 'types/redux/ExpiringPersistedState';
import { PersistReducerConfig } from '../../types/redux/PersistReducerConfig';

export const getPersistedReducer = (persistReducerConfig: PersistReducerConfig): Reducer => {
  const { reducer, storageKey, encryptionSecret, initialState = {}, expireSeconds = 600 } = persistReducerConfig;

  const transforms = [
    expireReducer(storageKey, {
      // (Optional) Key to be used for the time relative to which store is to be expired
      persistedAtKey: PERSISTED_AT_KEY,
      // (Required) Seconds after which store will be expired
      expireSeconds,
      // (Optional) State to be used for resetting e.g. provide initial reducer state
      expiredState: initialState,
      // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey`
      // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
      autoExpire: false,
    }),
  ];

  if (encryptionSecret != null) {
    transforms.push(
      encryptTransform({
        // You SHOULD NOT use a single secret key for all users of your application, as this negates any potential security benefits of encrypting the store in the first place.
        // You SHOULD NOT hard-code or generate your secret key anywhere on the client, as this risks exposing the key since the JavaScript source is ultimately accessible to the end-user.
        // If you are only interested in persisting the store over the course of a single session and then invalidating the store, consider using the user's access token or session key as the secret key.
        // For long-term persistence, you will want to use a unique, deterministic key that is provided by the server. For example, the server could derive a hash from the user's ID and a salt (also stored server-side) and then return that hash to the client to use to decrypt the store. Placing this key retrieval behind authentication would prevent someone from accessing the encrypted store data if they are not authenticated as the user.
        secretKey: encryptionSecret,
        onError: (error: Error) => {
          console.log('There has been a problem configuring the secure local storage', error);
          localStorage.removeItem('storageKey');
          location.reload();
        },
      }),
    );
  }

  const persistConfig = {
    key: storageKey,
    storage,
    transforms,
  };

  return persistReducer(persistConfig, reducer);
};
