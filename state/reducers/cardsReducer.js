import { createSelector } from "reselect";

const initialState = {
  selectedLabel: "6 pairs",
  selectedSize: 6,
  cards: [],
  isFlipped: [],
  pauseFlip: true,
  pair: [],
  foundCards: [],
  score: 0,
  cardsLoading: true,
};

const cardsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_CARDS_LOADING":
      return { ...state, pauseFlip: true, cardsLoading: true };
    case "GET_CARDS_SUCCESS":
      return { ...state, ...action.payload, cardsLoading: false };
    case "GET_CARDS_FAILED":
      return { ...state, cardsLoading: false };
    case "CHANGE_SIZE_ASYNC":
      return {
        ...state,
        selectedSize: action.payload.size.value,
        selectedLabel: action.payload.size.label,
        cardsLoading: false,
      };
    case "SET_IS_FLIPPED":
      return { ...state, ...action.payload };
    case "SET_PAUSE_FLIP":
      return { ...state, ...action.payload };
    case "SET_PAIR":
      return { ...state, ...action.payload };
    case "SET_FOUND_CARDS":
      return { ...state, ...action.payload };
    case "SET_SCORE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const cardsLoadingSelector = (state) => state.cardsLoading;
export const selectedSizeSelector = (state) => state.selectedSize;
export const selectedLabelSelector = (state) => state.selectedLabel;
export const cardsSelector = (state) => state.cards;
export const isFlippedSelector = (state) => state.isFlipped;
export const pauseFlipSelector = (state) => state.pauseFlip;
export const pairSelector = (state) => state.pair;
export const foundCardsSelector = (state) => state.foundCards;
export const scoreSelector = (state) => state.score;

// reselcter
export const rowCountSelector = createSelector(selectedSizeSelector, (size) => {
  switch (size) {
    case 21:
      return 7;
    case 18:
      return 6;
    case 10:
      return 5;
    case 15:
    case 12:
      return 6;
    default:
      return 4;
  }
});

export default cardsReducer;
