import { createReducer ,on } from "@ngrx/store";
import { CalculateFullPrice, LoadOrder } from "./order.actions";
import { flexibleOrder, Order, OrderStatus, PaymentMethod } from "../Models/order.module";

const initialState: flexibleOrder = {
    orderDate: new Date(),
    paymentMethod: PaymentMethod.Cash,
    status:OrderStatus.PENDING,
    meals: [],
    total_command_price: null,
  };

export const orderReducer  = createReducer (
    initialState,
    on(LoadOrder , () => {
        const storedDate = localStorage.getItem('order');
        return storedDate ? (JSON.parse(storedDate) as flexibleOrder) : initialState;
    }),
    on(CalculateFullPrice , (state) => {
        if (!state || !state.meals || state.meals.length === 0) {
            return state;
        }

        const totalCommandPrice = state.meals.reduce((total, meal) => {
            return total + meal.price_per_unit * meal.quantity;
          }, 0);

        return {
            ...state,
            total_command_price:totalCommandPrice,
        };
    })
);