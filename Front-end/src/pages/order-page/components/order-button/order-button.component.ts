import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreateOrder, flexibleOrder, MealsOrdsList, OrderStatus, PaymentMethod } from '../../Models/order.module';
import { PersisteOrder, selectOrderState } from '../../Store';
import { log } from 'console';

@Component({
  selector: 'app-order-button',
  imports: [],
  templateUrl: './order-button.component.html',
  styleUrl: './order-button.component.css'
})
export class OrderButtonComponent implements OnInit {
  
  OrderState$ : Observable<flexibleOrder>;

  constructor(private store:Store){
    this.OrderState$ = this.store.select(selectOrderState);
  }

  ngOnInit(): void {

  }

  OrderIt(): void {

    this.store.select(selectOrderState).subscribe((data) => {
      const Order: CreateOrder = {
        orderDate: new Date(data.orderDate),
        paymentMethod: data.paymentMethod || null,
        status: data.status,
        note: data.note || '',
        MealsOrdsList: data.meals.map((meal) => ({
          id: meal.id,
          quantity: meal.quantity || 1,
        })) as MealsOrdsList[],
      };
        this.store.dispatch(PersisteOrder({ data: Order }));
    });
}

}
