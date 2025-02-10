import { createReducer, on } from "@ngrx/store";
import { initialMealsState } from "./dashboard.state";
import { initMeals, loadMealsFailure, loadMealsSuccess } from "./dashboard.actions";





export const mealsReducer = createReducer(
    initialMealsState,
    on(initMeals , (state) => ({
        ...state,
        isLoading : true
    })
    ),
    on(loadMealsSuccess , (state , action) => ({
        ...state , 
        meals : action.meals
    })),
    on(loadMealsFailure, (state , action) => ({
        ...state , 
        error : action.error
    })) 
)