import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-meal-order-item',
  imports: [],
  templateUrl: './meal-order-item.component.html',
  styleUrls: ['./meal-order-item.component.css' , '../../order-page.component.css']
})
export class MealOrderItemComponent {
  @Input() meal:any;
}
