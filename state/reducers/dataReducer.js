import { createSelector } from "reselect";

const initialState = {
  selectedLabel: "6 pairs",
  selectedSize: 6,
  cards: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
  ],
  isLoading: true,
};

const dataReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_SELECTED_SIZE":
      return {
        ...state,
        selectedSize: action.payload.value,
        selectedLabel: action.payload.label,
        rowCout: action.payload.rowCount,
      };
    case "GET_USERNAME":
      return user;
    default:
      return state;
  }
};

export const selectedLabelSelector = (state) => state.selectedLabel;

export const cardsSelector = (state) => {
  return state.cards.slice(0, state.selectedSize * 2);
};

// reselcter
export const rowCountSelector = createSelector(cardsSelector, (cards) => {
  switch (cards.length) {
    case 42:
      return 7;
    case 36:
      return 6;
    case 20:
      return 5;
    case 24:
    case 30:
      return 6;
    default:
      return 4;
  }
});

export default dataReducer;
