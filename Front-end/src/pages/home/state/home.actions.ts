import {createAction, props} from "@ngrx/store";
import { Meal } from "../../order-page/Models";



export const initBestSellers = createAction(
    "[Home] load Best Sellers",
)

export const loadBestSellersSuccess = createAction(
    "[Home] load Best Sellers Success",
    props<{meals : Meal[]}>()
)

export const loadBestSellersFailure = createAction(
    "[Home] load Best Sellers Failure",
    props<{error : string}>()
)