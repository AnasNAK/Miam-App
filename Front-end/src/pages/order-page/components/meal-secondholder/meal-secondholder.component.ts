import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-secondholder',
  imports: [],
  templateUrl: './meal-secondholder.component.html',
  styleUrl: './meal-secondholder.component.css'
})
export class MealSecondholderComponent {
  @Input() meals:any;
}
