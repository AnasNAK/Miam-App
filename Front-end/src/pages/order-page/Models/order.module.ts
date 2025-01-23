import { Order_Meal } from "./order_meals.module";


export enum PaymentMethod {
    Cash,
    CreditCard
}
export enum OrderStatus {
    PENDING,
    COMPLETED,
    CANCELLED,
    DELIVERED,
    ACCEPTED,
    REJECTED
}

export interface Order {
    id:number,
    orderDate:Date,
    paymentMethod:PaymentMethod
    status:OrderStatus,
    meals:Order_Meal[]
}

export interface flexibleOrder{
    orderDate:Date,
    paymentMethod:PaymentMethod | null,
    status:OrderStatus.PENDING,
    meals:Meal[],
    total_command_price: number | null;
    total_preparation_time:string |null;
}

// to send data to backend you need 
// the OrderCreateInterface plus , the Interface that holds id and quantity of a Meal

export interface  MealsOrdsList {
    id:number,
    quantity:number
}

export interface Meal {
    id:number
    name: string;
    description: string;
    quantity: number;
    price_per_unit: number;
    preparationTime: number;
    imageUrl: string;
}

export interface CreateOrder {
    orderDate:Date,
    paymentMethod:PaymentMethod
    status:OrderStatus ,
    MealsOrdsList: MealsOrdsList[]
}