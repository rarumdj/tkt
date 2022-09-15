import { combineReducers } from "redux";
import businessDetailsReducer from "./reducers/businessDetailsReducer";
import listBusinessReducer from "./reducers/listBusinessReducer";

const rootReducer = combineReducers({
  business: businessDetailsReducer,
  listBuisness: listBusinessReducer,
});

export default rootReducer;
