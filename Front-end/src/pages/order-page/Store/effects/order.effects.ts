import { Injectable } from "@angular/core";
import { Actions , createEffect ,ofType } from "@ngrx/effects";
import * as OrderActions from '../actions/order.actions';
import { OrderService } from "../../service/Order.service";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, of, switchMap } from "rxjs";


@Injectable({providedIn:'any'})
export class OrderEffects{
    constructor(private actions$:Actions ,private orderService:OrderService , private store:Store
    ){
      console.log('OrderEffects instantiated');
    }


    creatOrder$ = createEffect(() => this.actions$.pipe(
      ofType(OrderActions.PersisteOrder),
      switchMap(({data}) =>
      this.orderService.sendOrder(data).pipe(
        map((response) => OrderActions.PersisteOrderSuccess({response})),
        catchError((error) => of(OrderActions.PersisteOrderFailure({error})))
      ))
    ))




    
}