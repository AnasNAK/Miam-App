import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.models";


export const selectAuth = createFeatureSelector<AuthState>("auth");
export const selectIsAuthenticated = createSelector(selectAuth , state => state.isAuthenticated);
export const selectAuthUser = createSelector(selectAuth , state => state.user);
export const selectHasError = createSelector(selectAuth , state => state.hasError);
export const selectIsLoading = createSelector(selectAuth , state => state.isLoading);

