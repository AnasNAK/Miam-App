import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginActions, LogoutAction } from "./auth.actions";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AuthService } from "../auth.service";
import { TokenStorageService } from "../token-storage.service";
import { ActivatedRoute, Router, Routes } from "@angular/router";

@Injectable()
export class AuthEffects {

    readonly actions$  = inject(Actions);
    private readonly router : Router = inject(Router);
    private readonly authService : AuthService = inject(AuthService);
    private readonly tokenStorageService : TokenStorageService = inject(TokenStorageService);
    private readonly activatedRoute : ActivatedRoute = inject(ActivatedRoute);

    readonly login$ = createEffect(() => {        
        
        return this.actions$.pipe(
            ofType(LoginActions.request),
            exhaustMap(credentials => {
                return this.authService.login(credentials.email, credentials.password).pipe( 
                    map(res => {
                        this.tokenStorageService.saveAccessToken(res.data.token);
                        return LoginActions.success();
                    }),
                    catchError(err => {
                        console.log(err);
                       return of(LoginActions.failure({ error: err }))
                    }) 
                );
            })
        );
    });

    readonly onLoginSuccess$ = createEffect(() =>       
         this.actions$.pipe(
            ofType(LoginActions.success),
           map(() => {
            this.router.navigateByUrl(
                this.activatedRoute.snapshot.queryParams['returnUrl'] || '/'
            )
           })

        ),
        {dispatch : false}
    );

    readonly logout$ = createEffect(() => 
        this.actions$.pipe(
            ofType(LogoutAction),
            map(() => {
                this.authService.logout()
                this.router.navigateByUrl('/')
            })
        ),
        {dispatch : false}
    )



}