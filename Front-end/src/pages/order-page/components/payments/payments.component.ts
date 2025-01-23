import { Component } from '@angular/core';
import { PaymentItemComponent } from "../payment-item/payment-item.component";
import { PaymentMethod } from '../../Models/order.module';

@Component({
  selector: 'app-payments',
  imports: [PaymentItemComponent],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
   PaymentMethod = PaymentMethod;
}
