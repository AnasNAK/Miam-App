import { inject, Injectable } from "@angular/core";
import { MealService } from "../../../entities/meals/services/meal.service";





@Injectable()
export class HomeEffects {
    mealService = inject(MealService);
    actions$ = inject(Acti)
}