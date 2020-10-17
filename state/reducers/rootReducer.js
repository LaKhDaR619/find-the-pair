import { combineReducers } from "redux";
import dataReducer, * as fromData from "./dataReducer";

const rootReducer = combineReducers({ data: dataReducer });

export const cardsSelector = (state) => fromData.cardsSelector(state.data);
export const rowCountSelector = (state) =>
  fromData.rowCountSelector(state.data);

export const selectedLabelSelector = (state) =>
  fromData.selectedLabelSelector(state.data);

export default rootReducer;
