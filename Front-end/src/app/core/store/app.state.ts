import { MealsInterface } from "../../../shared/models/state.models";
import { AuthState } from "../auth/store/auth.models";


export interface AppState {
    order: any;
    bestSellers: MealsInterface;
    auth : AuthState
}