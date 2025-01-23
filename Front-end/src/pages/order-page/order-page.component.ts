import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MealHolderOrderPageComponent } from "./components/meal-holder-order-page/meal-holder-order-page.component";
import { Observable } from 'rxjs';
import { flexibleOrder, Order } from './Models/order.module';
import { Store } from '@ngrx/store';
import { CalculateFullPrice, CalculateTimeToPrepare, LoadOrder } from './service/order.actions';
import { MealSecondholderComponent } from "./components/meal-secondholder/meal-secondholder.component";
import { PaymentAndInfoHolderComponent } from "./components/payment-and-info-holder/payment-and-info-holder.component";
import {faPaperPlane} from "@ng-icons/font-awesome/regular"
import {NgIcon, provideIcons} from '@ng-icons/core';
import { selectOrderState } from './service/order.selectors';


const orderData = {
  orderDate: new Date("2025-01-22T15:30:00"),
  paymentMethod: null,
  status: null,
  meals: [
    {
      id: 1,
      name: "Caesar Salad",
      description: "Fresh romaine lettuce, croutons, and parmesan cheese",
      quantity: 2,
      price_per_unit: 12.99,
      preparationTime: 30,
      imageUrl: "https://res.cloudinary.com/dtzhtlss7/image/upload/v1737544108/CaesarSalad_inbize.jpg"
    },
    {
      id: 2,
      name: "Tomato Soup",
      description: "Rich and creamy tomato soup with fresh basil",
      quantity: 1,
      price_per_unit: 9.99,
      preparationTime: 20,
      imageUrl: "https://res.cloudinary.com/dtzhtlss7/image/upload/v1737542962/TomatoSoup_zfrsml.jpg"
    },
    {
      id: 3,
      name: "Grilled Chicken Sandwich",
      description: "Juicy grilled chicken with lettuce and tomato",
      quantity: 3,
      price_per_unit: 15.50,
      preparationTime: 45,
      imageUrl: "https://res.cloudinary.com/dtzhtlss7/image/upload/v1737543171/GrilledChickenSandwich_nin73g.jpg"
    }
  ],
};


@Component({
  selector: 'app-order-page',
  imports: [CommonModule, MealHolderOrderPageComponent, PaymentAndInfoHolderComponent , NgIcon],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css',
  viewProviders: [provideIcons({faPaperPlane})]
})

export class OrderPageComponent implements OnInit {

  OrderData$:Observable<flexibleOrder | null>;

  constructor(private store:Store<{order:flexibleOrder |null}>){
    this.OrderData$ = this.store.select(selectOrderState);
  }

  ngOnInit(): void {
    this.store.dispatch(LoadOrder());
    this.store.dispatch(CalculateFullPrice());
    this.store.dispatch(CalculateTimeToPrepare());
    this.OrderData$.subscribe((data) => {
      console.log('Order Data:', data);
    });
  }

  // ngOnInit(): void {
  //   localStorage.setItem('order' , JSON.stringify(orderData));
  // }

  // ngOnInit(): void {
  //   const storedOrderDataString = localStorage.getItem("order");
  //   if(storedOrderDataString) {
  //     this.OrderData = JSON.parse(storedOrderDataString);
  //   }else{
  //     this.OrderData = null;
  //   }
  // }


}
