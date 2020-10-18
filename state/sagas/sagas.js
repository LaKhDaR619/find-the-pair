import { takeLatest } from "redux-saga/effects";
import { changeSize, firstStage, getCards } from "./cardsSaga";

export default function* mySaga() {
  yield takeLatest("GET_CARDS", getCards);
  yield takeLatest("CHANGE_SIZE", changeSize);
  yield takeLatest("FIRST_STAGE", firstStage);
}
