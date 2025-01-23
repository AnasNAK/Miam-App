import { Routes } from '@angular/router';
import { ContentLayoutComponent } from '../layouts/content-layout/content-layout.component';
import { OrderPageComponent } from '../pages/order-page/order-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    loadChildren : () => import('../pages/home/home.routes').then(r => r.routes)
  },
  {
    path: '',
    loadChildren : () => import('../pages/resturant/resturant.routes').then(r => r.routes)
  },
  {
    path:'order',
    component:OrderPageComponent
  }
];
