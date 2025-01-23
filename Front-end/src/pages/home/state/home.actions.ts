import {createAction, props} from "@ngrx/store";
import { create } from "domain";
import { Meal } from "../../order-page/Models";


export const init = createAction(
    "[Home] Prepare to load data"
)

export const loadBestSellers = createAction(
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