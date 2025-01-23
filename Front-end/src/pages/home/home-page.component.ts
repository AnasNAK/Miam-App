import { Component } from '@angular/core';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { BlogsComponent } from "./components/blogs/blogs.component";
import { PopularPicksComponent } from './components/popular-picks/popular-picks.component';

@Component({
  selector: 'app-home-page',
  imports: [HomeHeroComponent, BlogsComponent , PopularPicksComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
