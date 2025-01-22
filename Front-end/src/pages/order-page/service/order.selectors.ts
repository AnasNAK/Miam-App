import { createFeatureSelector, createSelector } from "@ngrx/store";
import { flexibleOrder } from "../Models/order.module";

export const selectOrderState = createFeatureSelector<flexibleOrder>('order');
export const selectPaymentMethod = createSelector(
    selectOrderState , 
    (state : flexibleOrder) => state.paymentMethod
)