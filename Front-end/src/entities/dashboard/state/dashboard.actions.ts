import { createAction, props } from "@ngrx/store";
import { Meal } from "../../../pages/order-page/Models";



export const initMeals = createAction(
    "[Dashboard] init"
)

export const loadMealsSuccess = createAction(
    "[Dashboard] load meals success",
    props<{ meals : Meal[] }>()
)

export const loadMealsFailure = createAction(
    "[Dashboard] load meals failure",
    props<{ error : string } >()
)