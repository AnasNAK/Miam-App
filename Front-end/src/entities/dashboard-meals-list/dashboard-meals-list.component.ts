import { Component } from '@angular/core';
import { DashboardMealItemComponent } from '../dashboard-meal-item/dashboard-meal-item.component';

@Component({
  selector: 'app-dashboard-meals-list',
  imports: [DashboardMealItemComponent],
  templateUrl: './dashboard-meals-list.component.html',
  styleUrl: './dashboard-meals-list.component.css'
})
export class DashboardMealsListComponent {

}
