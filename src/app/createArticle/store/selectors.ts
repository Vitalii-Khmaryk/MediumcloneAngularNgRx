import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInteface } from 'src/app/shared/types/appState.interface';
import { CreateArticleStateInterface } from './types/createArticleState.interface';

export const createArticleFeatureSelector = createFeatureSelector<
  AppStateInteface,
  CreateArticleStateInterface
>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.validationErrors
);
