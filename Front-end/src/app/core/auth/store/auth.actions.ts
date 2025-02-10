import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";


// Login Action
export const LoginActions = createActionGroup({
    source : "Auth: Login",
    events : {
        request : props<{email : string; password: string}>(),
        success : emptyProps(),
        failure : props<{error : Error}>()
    }
})

export const LogoutAction = createAction('[Auth] Logout');