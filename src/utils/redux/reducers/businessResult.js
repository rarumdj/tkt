import {
  FETCH_BUSINESS_RESULTS,
  FETCH_BUSINESS_RESULTS_SUCCESS,
  FETCH_BUSINESS_RESULTS_ERROR,
} from "../actionType";

const initialState = {
  loading: false,
  success: false,
  error: "",
};

const businessResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESS_RESULTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BUSINESS_RESULTS_SUCCESS:
      return {
        success: true,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_BUSINESS_RESULTS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default businessResultsReducer;
