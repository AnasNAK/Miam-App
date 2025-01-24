import { ActionReducerMap } from "@ngrx/store";
import { orderReducer } from "../../pages/order-page/Store";

export const reducers: ActionReducerMap<any> = {
    order:orderReducer,
}