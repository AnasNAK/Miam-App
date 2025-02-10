import { createReducer, on, Action } from '@ngrx/store';
import { LoginActions, LogoutAction } from './auth.actions';
import { AuthState } from './auth.models';

export interface AuthPartialState {
  readonly ['auth']: AuthState;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: undefined,
  hasError: false,
  isLoading: false,
};

export const AuthReducer = createReducer(
  initialState,

  // Login Reducer in Login action request
  on(
    LoginActions.request,
    (state): AuthState => ({
      ...state,
      isLoading: true,
      hasError: false,
    })
  ),

  // Login Reducer in Login actions success
  on(
    LoginActions.request,
    (state): AuthState => ({
      ...state,
      isLoading: false,
      isAuthenticated: true,
    })
  ),
  // Logout 
  on(
    LogoutAction,
    (state) : AuthState => ({
      ...initialState
    }) 
  ),
  // Login Reducer in Login actions failure
  on(
    LoginActions.failure,
    (state, action): AuthState => ({
      ...state,
      isLoading: false,
      hasError: action.type === LoginActions.failure.type || !!action.error,
    })
  )
);
