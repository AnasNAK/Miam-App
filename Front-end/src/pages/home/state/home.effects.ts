import { inject, Injectable } from "@angular/core";
import { MealService } from "../../../entities/meals/services/meal.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { initBestSellers, loadBestSellersFailure, loadBestSellersSuccess } from "./home.actions";
import { catchError, map, mergeMap, of } from "rxjs";





@Injectable()
export class HomeEffect {
    private mealService = inject(MealService);
    private actions$ = inject(Actions);

    loadBestSellers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(initBestSellers),
            mergeMap(() => 
                this.mealService.loadBestSellers().pipe(
                    map( meals => loadBestSellersSuccess({ meals : meals})),
                    catchError(err => of(loadBestSellersFailure({ error : err.message})))
                )
            )
        )
    )
}