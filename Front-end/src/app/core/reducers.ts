import { ActionReducerMap } from "@ngrx/store";
import { orderReducer } from "../../pages/order-page/service/order.reducer";
export const reducers: ActionReducerMap<any> = {
    order:orderReducer,
}