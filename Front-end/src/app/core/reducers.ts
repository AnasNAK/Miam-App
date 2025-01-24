import { ActionReducerMap } from "@ngrx/store";
import { orderReducer } from "../../pages/order-page/service/order.reducer";
import { bestSellersReducer } from "../../pages/home/state/home.reducers";

export const reducers: ActionReducerMap<any> = {
    order:orderReducer,
    bestSellers : bestSellersReducer
}