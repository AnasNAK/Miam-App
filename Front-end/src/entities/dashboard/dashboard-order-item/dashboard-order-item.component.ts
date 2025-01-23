import { Component } from '@angular/core';
import { DashboardOrderDetailsComponent } from "../dashboard-order-details/dashboard-order-details.component";

@Component({
  selector: 'app-dashboard-order-item',
  imports: [DashboardOrderDetailsComponent],
  templateUrl: './dashboard-order-item.component.html',
  styleUrl: './dashboard-order-item.component.css'
})
export class DashboardOrderItemComponent {

}
