import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Meal } from '../../../../entities/meals/model/meals.model';

@Component({
  selector: 'app-meals-card',
  imports: [],
  template: `
    <div
      class="bg-white relative p-6 flex justify-center items-center flex-col shadow-sm shadow-gray-100  rounded-md w-[230px]"
    >
      <div class="overflow-hidden w-40 h-40 mt-[-65px] rounded-full">
        <img
          src="assets/images/blogs-img/blog-1.jpg"
          alt=""
          class="w-full h-full"
        />
      </div>
      <div class="mt-4 flex items-center text-center flex-col">
        <h4 class="text-lg max-w-[90%] font-medium text-gray-800">
          {{ meal.name }}
        </h4>
        <p class="my-1"><span>$</span>{{ meal.price }}</p>
        <p class="text-gray-400">
          {{ meal.quantity }} <span>Bowls available</span>
        </p>
        <button class="bg-primary text-slate-100  mt-2 flex items-center  py-2 px-4  gap-1 rounded-full text-sm " (click)="emitSelectedMeal(meal)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-bag-plus-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"
            />
          </svg>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  `,
})
export class MealsCardComponent {
  @Input() meal!: Meal;

  @Output() selectedMeal: EventEmitter<Meal> = new EventEmitter<Meal>();

  emitSelectedMeal(meal: Meal): void {
    this.selectedMeal.emit(meal);
  }
}
