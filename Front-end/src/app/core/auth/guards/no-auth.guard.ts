import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, createUrlTreeFromSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { AuthFacade } from "../store/auth.facades";


@Injectable({providedIn : 'root'})
export class NoAuthGuard implements CanActivate {
  private readonly authFacade : AuthFacade = inject(AuthFacade)

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.authFacade._isAuthenticated.pipe(
      take(1),
      map(isAuth => !isAuth ? true : createUrlTreeFromSnapshot(route , ['/'] , {returnUrl : state.url}))
    )
  }
  
}