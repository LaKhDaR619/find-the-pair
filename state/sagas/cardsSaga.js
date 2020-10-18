import { put, call, delay } from "redux-saga/effects";

export function* getCards({ payload }) {
  yield put({ type: "SET_CARDS_LOADING" });

  const { size } = payload;

  const newAction = yield call(async () => {
    try {
      const res = await fetch("/api/cards", {
        method: "POST",
        body: JSON.stringify({ size }),
      });
      const data = await res.json();
      const { cards } = data;

      return {
        type: "GET_CARDS_SUCCESS",
        payload: { cards },
      };
    } catch (error) {
      console.log(error);
    }

    return { type: "GET_CARDS_FAILED" };
  });

  yield put(newAction);

  if (newAction.type == "GET_CARDS_SUCCESS") {
    yield put({ type: "FIRST_STAGE", payload: { size } });
  }
}

export function* changeSize({ payload }) {
  yield put({ type: "CHANGE_SIZE_ASYNC", payload });
  yield put({ type: "GET_CARDS", payload: { size: payload.size.value } });
}

export function* firstStage({ payload }) {
  // reseting everything
  yield put({ type: "SET_PAIR", payload: { pair: [] } });
  yield put({ type: "SET_FOUND_CARDS", payload: { foundCards: [] } });
  yield put({ type: "SET_SCORE", payload: { score: 0 } });
  yield put({ type: "SET_TRIES", payload: { tries: 10 } });

  const { size } = payload;

  // showing all images
  const temp = [];
  for (let i = 0; i < size * 2; i++) {
    temp[i] = true;
  }
  yield put({ type: "SET_IS_FLIPPED", payload: { isFlipped: temp } });

  // waiting 5 seconds, then hiding the images
  yield delay(5000);

  for (let i = 0; i < size * 2; i++) temp[i] = false;
  yield put({ type: "SET_IS_FLIPPED", payload: { isFlipped: temp } });

  // enabling fliping the cards
  yield put({ type: "SET_PAUSE_FLIP", payload: { pauseFlip: false } });
}
