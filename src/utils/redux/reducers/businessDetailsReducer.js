import {
  FETCH_BUSINESS_DETAILS,
  FETCH_BUSINESS_DETAILS_SUCCESS,
  FETCH_BUSINESS_DETAILS_ERROR,
} from "../actionType";

const initialState = {
  loading: false,
  success: false,
  data: [],
  error: "",
};

const businessDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESS_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BUSINESS_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
        error: "",
      };
    case FETCH_BUSINESS_DETAILS_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default businessDetailsReducer;
