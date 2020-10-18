import { combineReducers } from "redux";
import cardsReducer, * as fromCards from "./cardsReducer";

const rootReducer = combineReducers({ cards: cardsReducer });

export const cardsSelector = (state) => fromCards.cardsSelector(state.cards);
export const cardsLoadingSelector = (state) =>
  fromCards.cardsLoadingSelector(state.cards);
export const rowCountSelector = (state) =>
  fromCards.rowCountSelector(state.cards);
export const selectedSizeSelector = (state) =>
  fromCards.selectedSizeSelector(state.cards);
export const selectedLabelSelector = (state) =>
  fromCards.selectedLabelSelector(state.cards);
export const isFlippedSelector = (state) =>
  fromCards.isFlippedSelector(state.cards);
export const pauseFlipSelector = (state) =>
  fromCards.pauseFlipSelector(state.cards);
export const pairSelector = (state) => fromCards.pairSelector(state.cards);
export const foundCardsSelector = (state) =>
  fromCards.foundCardsSelector(state.cards);
export const scoreSelector = (state) => fromCards.scoreSelector(state.cards);

export default rootReducer;
