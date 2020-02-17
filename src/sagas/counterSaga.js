import { put, takeEvery } from "redux-saga/effects";

function* increment() {
  yield put({ type: "INCREMENT_COUNTER_FROM_SAGA", payload: { count: 1 } });
}
export default function* counter() {
  yield takeEvery("INCREMENT_COUNTER", increment);
}
