import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { flexibleOrder } from '../../Models/order.module';
import { selectOrderState } from '../../Store';

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

  OrderIt() : void {

  }


}
