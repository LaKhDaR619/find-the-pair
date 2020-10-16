const initialState = {
  selectedLabel: "6 pairs",
  selectedSize: 6,
  rowCount: 4,
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
  ],
  isLoading: true,
};

const dataReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_SELECTED_SIZE":
      return {
        ...state,
        selectedSize: payload.value,
        selectedLabel: payload.label,
      };
    case "GET_USERNAME":
      return user;
    default:
      return state;
  }
};

export const cardsSelector = (state) => {
  return state.cards.slice(0, state.selectedSize * 2);
};
export const rowCountSelector = (state) => state.rowCount;

export default dataReducer;
