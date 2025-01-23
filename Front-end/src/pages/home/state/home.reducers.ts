import { createReducer, on } from "@ngrx/store";
import { initialBestSellersState } from "./home.state";
import * as homeActions from "./home.actions"


export const bestSellersReducer = createReducer(
    initialBestSellersState,
    on(homeActions.loadBestSellers , (state) => ({
        ...state ,
        isLoading : true
    })),
    on(homeActions.loadBestSellersSuccess , (state , action ) => ({
        ...state,
        meals : action.meals
    })),
    on(homeActions.loadBestSellersFailure , (state , action) => ({
        ...state, 
        error : action.error
    }))
)