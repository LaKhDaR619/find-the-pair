import { put, call } from "redux-saga/effects";

// check if the user is logged in
export function* checkLogin() {
  yield put({ type: "SET_AUTH_LOADING" });

  let friends;

  const newAction = yield call(async () => {
    try {
      const res = await fetch("/auth/check/loggedin");

      const data = await res.json();

      const loggedIn = data.loggedIn;
      const user = { username: data.user.username, id: data.user.id };
      friends = data.user.friends;

      return {
        type: "CHECK_LOGIN_ASYNC",
        payload: { loggedIn, user },
      };
    } catch (error) {
      console.log(error);
    }

    return { type: "CHECK_LOGIN_ASYNC" };
  });

  if (friends) yield put({ type: "SET_FRIENDS", payload: { friends } });

  yield put(newAction);
}
