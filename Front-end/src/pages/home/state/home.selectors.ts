import { createSelector } from "@ngrx/store";
import { BestSellersInterface } from "../../../entities/meals/models/meals.models";

export const selectBestSellersState = (state: BestSellersInterface) => state;

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