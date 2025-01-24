import { Injectable } from "@angular/core";
import { Actions , createEffect ,ofType } from "@ngrx/effects";
import * as OrderActions from '../actions/order.actions';
import { OrderService } from "../../service/Order.service";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, switchMap } from "rxjs";
@Injectable()
export class OrderEffects{
    constructor(private actions$:Actions ,private orderService:OrderService , private store:Store
    ){}


    createOrder$ = createEffect(
        () => this.actions$.pipe(
            ofType(OrderActions.PersisteOrder),
            switchMap(({data}) => this.orderService.sendOrder(data).pipe(
                map((response) => {
                    return OrderActions.PersisteOrderSuccess({response});
                }),
                catchError((error) => {
                    return EMPTY
                })
            ))
        )
    )

    
}