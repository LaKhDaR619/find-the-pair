import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../state/reducers/rootReducer";
import mySaga from "../state/sagas/sagas";
import createSagaMiddleware from "redux-saga";

import App from "../Components/App";

export default function Home() {
  const sagaMiddleware = createSagaMiddleware();

  let store;

  // try catch for the mobile phones without the redux extension
  try {
    const enhanser = compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    store = createStore(rootReducer, enhanser);
  } catch (err) {
    store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    console.log(err);
  }

  sagaMiddleware.run(mySaga);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
