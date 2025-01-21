import { Component } from '@angular/core';
import { HomeHeroComponent } from "../components/home-hero/home-hero.component";

@Component({
  selector: 'app-home-page',
  imports: [HomeHeroComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
