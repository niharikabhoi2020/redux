import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleWare from "redux-saga";

import rootReducer from "../reducers/index";
import rootSaga from "../sagas/index";

const sagaMiddleWare = createSagaMiddleWare();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);
export default store;

// export default createStore(rootReducer, applyMiddleware());
// sagaMiddleWare.run(rootSaga);
