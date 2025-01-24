import { createSelector } from "@ngrx/store";
import { BestSellersInterface } from "../../../entities/meals/models/meals.models";
import { AppState } from "../../../app/core/store/app.state";

export const selectBestSellersState = (state: AppState) => state.bestSellers;

export const selectBestSellers = createSelector(
  selectBestSellersState,
  (state) => state.meals
);

export const selectIsLoading = createSelector(
  selectBestSellersState,
  (state) => state.isLoading
);

export const selectError = createSelector(
  selectBestSellersState,
  (state) => state.error
);