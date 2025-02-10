import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthFacade } from "./store/auth.facades";
import { Observable } from "rxjs";
import { TokenStorageService } from "./token-storage.service";

@Injectable({providedIn : 'root'})
export class AuthInterceptor implements HttpInterceptor {
  private readonly authFacade : AuthFacade = inject(AuthFacade);
  private readonly tokenStorageService : TokenStorageService = inject(TokenStorageService);
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.tokenStorageService.getAccessToken();
    if (accessToken) {
      req = req.clone({setHeaders : {Authorization : `Bearer ${accessToken}`}})
    }
    return next.handle(req);
  }
}
