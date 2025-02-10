import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as AuthSelector from './auth.selectors'
import { LoginActions, LogoutAction } from "./auth.actions";

@Injectable({providedIn:'root'})
export class AuthFacade {
    private readonly store : Store = inject(Store)

    readonly _isAuthenticated = this.store.select(AuthSelector.selectIsAuthenticated)
    readonly _authUser = this.store.select(AuthSelector.selectAuthUser)
    readonly _hasError = this.store.select(AuthSelector.selectHasError)
    readonly _isLoading = this.store.select(AuthSelector.selectIsLoading)

    login(email : string , password : string ) {     
        this.store.dispatch(LoginActions.request({email ,password}))
    }
     
    logout() {
        this.store.dispatch(LogoutAction())
    }
}