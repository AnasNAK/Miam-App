import { Component, Input } from '@angular/core';
import { MealOrderItemComponent } from '../meal-order-item/meal-order-item.component';

@Component({
  selector: 'app-meal-holder-order-page',
  imports: [MealOrderItemComponent],
  templateUrl: './meal-holder-order-page.component.html',
  styleUrl: './meal-holder-order-page.component.css'
})
export class MealHolderOrderPageComponent {
  @Input() meals : any;
}
