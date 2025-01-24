import { createReducer ,on } from "@ngrx/store";
import { flexibleOrder, Order, OrderStatus, PaymentMethod } from "../../Models/order.module";
import { CalculateFullPrice, CalculateTimeToPrepare, ChangePrice, LoadOrder, LoadPaymentMethod, UpdatePaymentMethod } from "../actions";

const initialState: flexibleOrder = {
    orderDate: new Date(),
    paymentMethod: PaymentMethod.Cash,
    status:OrderStatus.PENDING,
    meals: [],
    note:null,
    total_command_price: null,
    total_preparation_time:null,
    client_money:null
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
    }),
    on(CalculateTimeToPrepare , (state) => {
        if(!state || !state.meals || state.meals.length ===0){
            return state;
        }

        const totalPreparationTimeMinutes = state.meals.reduce(
            (total, meal) => total + meal.preparationTime,
            0
        );

        const hours = Math.floor(totalPreparationTimeMinutes / 60);
        const minutes = totalPreparationTimeMinutes % 60;

        const formattedPreparationTime = `${hours > 0 ? hours + " hour" + (hours > 1 ? "s" : "") : ""} ${
            minutes > 0 ? minutes + " minute" + (minutes > 1 ? "s" : "") : ""
        }`.trim();

        return {
            ...state,
            total_preparation_time: formattedPreparationTime
        }
    }),
    on(ChangePrice , (state , {price , mealId}) => {

        if(!state || !state.meals || state.meals.length ===0){
            return state;
        }

        const updatedMeals = state.meals.map((meal) =>
            meal.id === mealId ? { ...meal, price_per_unit: price } : meal
        );

        return{
            ...state,
            meals:updatedMeals
        }
    }),
    on(LoadPaymentMethod , (state) => {
        return {...state};
    }),
    on(UpdatePaymentMethod , (state , {method}) => {

        if(!state){
            return state;
        }

        return {
            ...state,
            paymentMethod:method
        }
    })
);