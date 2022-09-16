import { all } from "redux-saga/effects";
import BusinessSaga from "./BusinessSaga";

export function* sagas() {
  yield all([BusinessSaga]);
}
