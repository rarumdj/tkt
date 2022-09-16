import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { BusinessReducer } from "./businessReducer";

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    business: BusinessReducer,
  });

const createRootReducer = (history) => (state, action) => {
  return appReducer(history)(state, action);
};

export default createRootReducer;
