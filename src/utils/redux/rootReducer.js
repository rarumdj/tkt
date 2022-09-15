import { combineReducers } from "redux";
import businessDetailsReducer from "./reducers/businessDetailsReducer";
import businessResultsReducer from "./reducers/businessResult";
import listBusinessReducer from "./reducers/listBusinessReducer";

const rootReducer = combineReducers({
  business: businessDetailsReducer,
  listBuisness: listBusinessReducer,
  businessResult: businessResultsReducer,
});

export default rootReducer;
