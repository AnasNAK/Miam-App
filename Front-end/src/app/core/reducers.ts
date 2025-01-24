import { ActionReducerMap } from "@ngrx/store";
import { orderReducer } from "../../pages/order-page/Store";
import { bestSellersReducer } from "../../pages/home/state/home.reducers";
import { AppState } from "./store/app.state";

export const reducers: ActionReducerMap<AppState> = {
    order:orderReducer,
    bestSellers : bestSellersReducer
}