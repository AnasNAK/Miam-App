import { Meal } from "../../../pages/order-page/Models/order.module";




export interface BestSellersInterface{
    isLoading: boolean,
    meals: Meal[] ,
    error: string | null,
}