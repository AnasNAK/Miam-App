import { Meal } from "../../pages/order-page/Models";


export interface MealsInterface{
    isLoading: boolean,
    meals: Meal[] ,
    error: string | null,
}

