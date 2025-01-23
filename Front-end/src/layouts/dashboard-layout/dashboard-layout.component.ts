import { Component } from '@angular/core';
import { SideBarComponent } from "./side-bar/side-bar.component";
import { DashboardMealsListComponent } from '../../entities/dashboard/dashboard-meals-list/dashboard-meals-list.component';
import { DashboardOngoingOrdersListComponent } from "../../entities/dashboard/dashboard-ongoing-orders-list/dashboard-ongoing-orders-list.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [SideBarComponent, DashboardMealsListComponent, DashboardOngoingOrdersListComponent,RouterOutlet],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}
