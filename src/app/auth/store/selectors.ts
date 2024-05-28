import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInteface } from 'src/app/shared/types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';

export const authFeatureSelector = createFeatureSelector<
  AppStateInteface,
  AuthStateInterface
>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState:AuthStateInterface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState:AuthStateInterface) => authState.validationErrors
);


export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState:AuthStateInterface) => authState.isLoggedIn
);


export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState:AuthStateInterface) => authState.isLoggedIn===false
);

export const isCurrentUserSelector = createSelector(
  authFeatureSelector,
  (authState:AuthStateInterface) => authState.currentUser
);