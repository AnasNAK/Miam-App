import { Order_Meal } from "./order_meals.module"

enum PaymentMethod {
    Cash,
    CreditCard
}
enum OrderStatus {
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

// to send data to backend you need 
// the OrderCreateInterface plus , the Interface that holds id and quantity of a Meal

export interface  MealsOrdsList {
    id:number,
    quantity:number
}

export interface CreateOrder {
    orderDate:Date,
    paymentMethod:PaymentMethod
    status:OrderStatus ,
    MealsOrdsList: MealsOrdsList[]
}