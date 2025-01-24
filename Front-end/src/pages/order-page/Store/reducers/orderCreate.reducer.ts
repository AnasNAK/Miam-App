import { createReducer, on } from "@ngrx/store"
import { Order } from "../../Models/order.module"
import { PersisteOrder, PersisteOrderFailure, PersisteOrderSuccess } from "../actions"

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

export const OrderCreateReducer = createReducer(
    initialState,
    on(PersisteOrder ,(state) => ({
        ...state,
        loading:true,
        error:null
    })),
    on(PersisteOrderSuccess , (state , {response}) => ({
        ...state,
        order:response,
        loading:false,
        error:null
    })),
    on(PersisteOrderFailure , (state , {error}) => ({
        ...state,
        loading:false,
        error:error
    }))
    
)