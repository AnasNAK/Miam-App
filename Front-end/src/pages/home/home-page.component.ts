import { Component, inject, OnInit } from '@angular/core';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { BlogsComponent } from "./components/blogs/blogs.component";
import { PopularPicksComponent } from './components/popular-picks/popular-picks.component';
import { Store } from '@ngrx/store';
import { initBestSellers } from './state/home.actions';
import { Observable } from 'rxjs';
import { Meal } from '../order-page/Models';
import { selectBestSellers, selectError, selectIsLoading } from './state/home.selectors';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-page',
  imports: [HomeHeroComponent, BlogsComponent , PopularPicksComponent , CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit{
  private store = inject(Store);
  meals$ : Observable<Meal[]>;
  isLoading$ : Observable<boolean>;
  error$ : Observable<string | null>;

  ngOnInit(): void {
    this.store.dispatch(initBestSellers());
  }

  constructor(){
    this.meals$ = this.store.select(selectBestSellers);
    this.error$ = this.store.select(selectError);
    this.isLoading$ = this.store.select(selectIsLoading);
  }
   
}
