import { Component } from '@angular/core';
import { CartComponent } from "./components/cart/cart.component";
import { InformationComponent } from "./components/information/information.component";
import { MenuComponent } from "./components/menu/menu.component";
import { TabsComponent } from "./components/tabs/tabs.component";

@Component({
  selector: 'app-resturant',
  imports: [CartComponent, InformationComponent, MenuComponent, TabsComponent],
  templateUrl: './resturant.component.html',
  styleUrl: './resturant.component.css'
})
export class ResturantComponent {

}
