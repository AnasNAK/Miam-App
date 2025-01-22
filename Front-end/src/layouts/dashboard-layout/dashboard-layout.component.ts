import { Component } from '@angular/core';
import { SideBarComponent } from "./side-bar/side-bar.component";
import { DashboardMealsListComponent } from '../../entities/dashboard-meals-list/dashboard-meals-list.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [SideBarComponent,DashboardMealsListComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}
