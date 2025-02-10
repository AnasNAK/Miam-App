import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenStorageService } from "./token-storage.service";

interface LoginResponse{
    timestamp : Date
    status: 200
    message: string
    data : {
        token : string
        expiredIn : Date
        roles : string[]
    }
}
const API_URL = "http://localhost:8080/api"

@Injectable({providedIn: 'root'})
export class AuthService {
    private readonly http : HttpClient = inject(HttpClient)
    private readonly tokenStorageService : TokenStorageService = inject(TokenStorageService)


    login(email: string , password : string ) : Observable<LoginResponse>{
        return this.http.post<LoginResponse>(API_URL+'/auth/login' , {email , password})
    }

    logout() :void{
        this.tokenStorageService.removeAccessToken()
    }


}