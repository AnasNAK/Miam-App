import { Component } from '@angular/core';
import { PaymentsComponent } from "../payments/payments.component";

@Component({
  selector: 'app-payment-method',
  imports: [PaymentsComponent],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css'
})
export class PaymentMethodComponent {

}
