import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInteface } from 'src/app/shared/types/appState.interface';
import { SettingsStateInterface } from '../types/settingsState.interface';

export const settingsFeatureSelector = createFeatureSelector<
  AppStateInteface,
  SettingsStateInterface
>('settings');

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.validationErrors
);
