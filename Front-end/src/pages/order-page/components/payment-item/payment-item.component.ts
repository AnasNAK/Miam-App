import { Component, Input } from '@angular/core';
import { PaymentMethod } from '../../Models/order.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {faCreditCard , faMoneyBill1} from '@ng-icons/font-awesome/regular'
import { selectPaymentMethod, UpdatePaymentMethod } from '../../Store';

@Component({
  selector: 'app-payment-item',
  imports: [CommonModule , NgIcon],
  templateUrl: './payment-item.component.html',
  styleUrl: './payment-item.component.css',
  viewProviders:[provideIcons({faCreditCard , faMoneyBill1})]
})
export class PaymentItemComponent {
  @Input() Type!: PaymentMethod;
  PaymentMethod = PaymentMethod;
  isSelected : boolean = false;

  constructor(private store:Store){
  }

  ngOnInit(): void {
    this.store.select(selectPaymentMethod).subscribe((currentMethod) => {
      this.isSelected = currentMethod === this.Type;
    });
  }

  UpdatePaymentMethod() {
    this.store.dispatch(UpdatePaymentMethod({method:this.Type}));
  }

}
