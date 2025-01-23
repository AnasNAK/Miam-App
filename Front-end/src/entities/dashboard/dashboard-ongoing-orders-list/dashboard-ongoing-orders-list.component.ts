import { Component } from '@angular/core';
import { DashboardOrderItemComponent } from '../dashboard-order-item/dashboard-order-item.component';

@Component({
  selector: 'app-dashboard-ongoing-orders-list',
  imports: [DashboardOrderItemComponent],
  templateUrl: './dashboard-ongoing-orders-list.component.html',
  styleUrl: './dashboard-ongoing-orders-list.component.css'
})
export class DashboardOngoingOrdersListComponent {

}
