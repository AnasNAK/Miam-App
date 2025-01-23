import { Component, Input } from '@angular/core';
import { Meal } from '../../../../entities/meals/model/meals.model';

@Component({
  selector: 'app-meals-card',
  imports: [],
  template: `
    <div class="bg-white relative p-6 flex justify-center items-center flex-col shadow-sm rounded-md w-[230px]">
        <div class="overflow-hidden w-40 h-40 mt-[-65px] rounded-full">
          <img src="assets/images/blogs-img/blog-1.jpg" alt="" class="w-full h-full">
        </div>
        <div class="mt-4 flex items-center text-center flex-col">
          <h4 class="text-lg max-w-[90%] font-medium text-gray-800">{{meal.name}}</h4>
          <p class="my-1"><span>$</span>{{meal.price}}</p>
          <p class="text-gray-400">{{meal.quantity}} <span>Bowls available</span></p>
        </div>
    </div>
  `
})
export class MealsCardComponent {
  @Input() meal! : Meal
}
