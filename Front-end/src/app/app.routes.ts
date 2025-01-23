import { Routes } from '@angular/router';
import { ContentLayoutComponent } from '../layouts/content-layout/content-layout.component';
<<<<<<< .merge_file_tdw5nk
import { OrderPageComponent } from '../pages/order-page/order-page.component';
=======
import { DashboardLayoutComponent } from '../layouts/dashboard-layout/dashboard-layout.component';
import { DashboardMealsListComponent } from '../entities/dashboard-meals-list/dashboard-meals-list.component';
import { DashboardOngoingOrdersListComponent } from '../entities/dashboard-ongoing-orders-list/dashboard-ongoing-orders-list.component';
>>>>>>> .merge_file_G7WjTe

export const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    loadChildren : () => import('../pages/home/home.routes').then(r => r.routes)
  },
<<<<<<< .merge_file_tdw5nk
  {
    path: '',
    loadChildren : () => import('../pages/resturant/resturant.routes').then(r => r.routes)
  },
  {
    path:'order',
    component:OrderPageComponent
=======

  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children:[
      {
        path: "meals",
        component: DashboardMealsListComponent
      },
      {
        path: "orders",
        component: DashboardOngoingOrdersListComponent
      }
    ]
>>>>>>> .merge_file_G7WjTe
  }
];
