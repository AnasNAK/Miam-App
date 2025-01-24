import { createReducer, on } from "@ngrx/store"
import { Order } from "../../Models/order.module"
import { PersisteOrder, PersisteOrderSuccess } from "../actions"

export interface OrderState {
    order:Order | null,
    loading:boolean
    error:any,
};

export const initialState:OrderState = {
    order:null,
    loading:false,
    error:null,
}

export const Reducer = createReducer(
    initialState,
    on(PersisteOrder ,(state) => ({
        ...state,
        loading:true,
        error:null
    }))
    
)