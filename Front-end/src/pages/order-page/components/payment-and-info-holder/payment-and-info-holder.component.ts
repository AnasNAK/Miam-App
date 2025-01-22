import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CalculateFullPrice, ChangePrice } from '../../service/order.actions';
import { PaymentsComponent } from "../payments/payments.component";
import { Observable } from 'rxjs';
import { selectFullPrice, selectPaymentMethod } from '../../service/order.selectors';
import { CommonModule } from '@angular/common';
import { PaymentMethod } from '../../Models/order.module';

@Component({
  selector: 'app-payment-and-info-holder',
  imports: [PaymentsComponent , CommonModule],
  templateUrl: './payment-and-info-holder.component.html',
  styleUrl: './payment-and-info-holder.component.css'
})
export class PaymentAndInfoHolderComponent implements OnInit {

  FullPrice$: Observable<number | null>;

  isSelected : boolean = false;
  

  constructor(private store: Store) {
    this.FullPrice$ = this.store.select(selectFullPrice);
  }

  ngOnInit(): void {
    this.store.dispatch(CalculateFullPrice());
    this.store.select(selectPaymentMethod).subscribe((currentMethod) => {
      this.isSelected = currentMethod === PaymentMethod.Cash;
    });
  }
}
