import { combineReducers } from "redux";
import dataReducer, * as fromCards from "./dataReducer";

const rootReducer = combineReducers({ data: dataReducer });

export const cardsSelector = (state) => fromCards.cardsSelector(state.data);
export const rowCountSelector = (state) =>
  fromCards.rowCountSelector(state.data);

export default rootReducer;
