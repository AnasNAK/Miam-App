import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { flexibleOrder, PaymentMethod } from '../../Models/order.module';
import { NgIcon, provideIcons } from '@ng-icons/core';
import{faPaperPlane} from '@ng-icons/font-awesome/regular'
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { OrderButtonComponent } from "../order-button/order-button.component";
import { selectFullPrice, selectOrderState, selectPaymentMethod } from '../../Store';

@Component({
  selector: 'app-summary-infos',
  imports: [NgIcon, CommonModule, OrderButtonComponent],
  templateUrl: './summary-infos.component.html',
  styleUrl: './summary-infos.component.css',
  viewProviders:[provideIcons({faPaperPlane})]
})
export class SummaryInfosComponent implements OnInit {
  PaymenMethod?: string;
  @Input() clientChange!:number;

   OrderData$: Observable<flexibleOrder | null>;
   FullPrice$: Observable<number | null>;

  constructor(private store:Store){
        this.FullPrice$ = this.store.select(selectFullPrice);
        this.OrderData$  = this.store.select(selectOrderState);
  }

  ngOnInit(): void {
    this.store.select(selectPaymentMethod).subscribe((currentMethod) => {
      if(currentMethod != null) {
        this.PaymenMethod = PaymentMethod[currentMethod];
      }
    });
  }
  
}
