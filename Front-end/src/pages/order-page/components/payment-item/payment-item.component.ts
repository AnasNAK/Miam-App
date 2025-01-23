import { Component, Input } from '@angular/core';
import { PaymentMethod } from '../../Models/order.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPaymentMethod } from '../../service/order.selectors';
import { CommonModule } from '@angular/common';
import { UpdatePaymentMethod } from '../../service/order.actions';

@Component({
  selector: 'app-payment-item',
  imports: [CommonModule],
  templateUrl: './payment-item.component.html',
  styleUrl: './payment-item.component.css'
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
