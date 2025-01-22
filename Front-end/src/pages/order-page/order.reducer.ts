import { createReducer ,on } from "@ngrx/store";
import { Order } from "./Models/order.module";
import { LoadOrder } from "./order.actions";

export const initialState: Order | null = null;

export const orderReducer  = createReducer (
    initialState,
    on(LoadOrder , () => {
        const storedDate = localStorage.getItem('order');
        return storedDate ? JSON.parse(storedDate) : null;
    })
);