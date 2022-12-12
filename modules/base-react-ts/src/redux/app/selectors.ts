import { AppState, RootState } from 'types';
import { createSelector } from 'reselect';

export const selectAppState = (state: RootState): AppState => state.app;

export const selectAppLoading = createSelector(selectAppState, (appState: AppState): boolean => appState.loading);

export const selectAuthToken = createSelector(selectAppState, (appState: AppState): string => appState.authToken);

export const selectIsLoggedIn = createSelector(selectAuthToken, (authToken: string): boolean => authToken !== '');
