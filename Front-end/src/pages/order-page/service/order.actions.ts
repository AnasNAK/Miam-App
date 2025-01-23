import { createAction, props } from "@ngrx/store";
import { PaymentMethod } from "../Models/order.module";

export const LoadOrder  = createAction('[Order / loading Orders]');
export const DeleteOrder = createAction('[Order / delete Order]');
export const CalculateFullPrice = createAction('[Order / CalculateFullPrice]');
export const CalculateTimeToPrepare = createAction('[Order / CalculatePreperationTime]');
export const ChangePrice = createAction(
    '[Order / ChangePrice]',
    props<{price : number , mealId:number}>()
)

export const LoadPaymentMethod = createAction('[Order / Load Payment Method]');
export const UpdatePaymentMethod = createAction(
    '[Order / Update Payment Method]',
    props<{method:PaymentMethod}>()
);