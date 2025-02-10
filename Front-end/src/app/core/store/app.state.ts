import { MealsInterface } from "../../../shared/models/state.models";
import { BestSellersInterface } from "../../../entities/meals/models/meals.models";
import { AuthState } from "../auth/store/auth.models";


export interface AppState {
    order: any;
    bestSellers: MealsInterface;
    bestSellers: BestSellersInterface;
    auth : AuthState
}