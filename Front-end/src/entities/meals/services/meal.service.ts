import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../../../pages/order-page/Models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  http = inject(HttpClient);
  apiUrl : string | undefined;
  constructor() { 
    this.apiUrl = environment.apiUrl;
  }

  loadBestSellers() : Observable<Meal[]>{
    return this.http.get<Meal[]>(`${this.apiUrl}/meal/topOrderedMeals`);
  }

  
}
