import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangePrice } from '../../service/order.actions';
import { PaymentsComponent } from "../payments/payments.component";

@Component({
  selector: 'app-payment-and-info-holder',
  imports: [PaymentsComponent],
  templateUrl: './payment-and-info-holder.component.html',
  styleUrl: './payment-and-info-holder.component.css'
})
export class PaymentAndInfoHolderComponent {

  
}
