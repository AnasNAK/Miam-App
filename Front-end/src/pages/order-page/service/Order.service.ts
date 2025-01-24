import { Injectable } from "@angular/core";
import { CreateOrder, Order } from "../Models/order.module";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})
export class OrderService {
    private apiUrl  = 'http://localhost:8080/order';
    constructor(private http:HttpClient){}

    sendOrder(data:CreateOrder) : Observable<Order> {
        return this.http.post<Order>(this.apiUrl , data);
    }

}