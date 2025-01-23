import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CalculateFullPrice, ChangePrice } from '../../service/order.actions';
import { PaymentsComponent } from "../payments/payments.component";
import { Observable } from 'rxjs';
import { selectclientMoney, selectFullPrice, selectOrderState, selectPaymentMethod } from '../../service/order.selectors';
import { CommonModule } from '@angular/common';
import { flexibleOrder, PaymentMethod } from '../../Models/order.module';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {faPaperPlane} from '@ng-icons/font-awesome/regular'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-and-info-holder',
  imports: [PaymentsComponent , CommonModule , NgIcon , FormsModule],
  templateUrl: './payment-and-info-holder.component.html',
  styleUrl: './payment-and-info-holder.component.css',
  viewProviders: [provideIcons({faPaperPlane})]
})
export class PaymentAndInfoHolderComponent implements OnInit {
  OrderData$:Observable<flexibleOrder | null>;
  FullPrice$: Observable<number | null>;
  ClientMoney$:Observable<number | null>;
  PaymenMethod?: string;

  Change!:number;

  isSelected : boolean = false;
  

  constructor(private store: Store) {
    this.FullPrice$ = this.store.select(selectFullPrice);
    this.ClientMoney$ = this.store.select(selectclientMoney)
    this.OrderData$  = this.store.select(selectOrderState);
  }

  ngOnInit(): void {
    this.store.dispatch(CalculateFullPrice());
    this.store.select(selectPaymentMethod).subscribe((currentMethod) => {
      this.isSelected = currentMethod === PaymentMethod.Cash;
      if(currentMethod != null) {
        this.PaymenMethod = PaymentMethod[currentMethod];
      }
    });
  }


  formatDate(isoDate: Date): string  {
    const date = new Date(isoDate);
    
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0'); 
    const ampm = hours >= 12 ? 'pm' : 'am';
  
    const formattedHours = hours % 12 || 12; 
  
    return `${day} ${month.toLowerCase()} , ${formattedHours}:${minutes}${ampm}`;
  };


  CalculateChange() : number {
    return this.Change
  }
}
