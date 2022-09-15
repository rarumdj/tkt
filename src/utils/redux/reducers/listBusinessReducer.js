import {
  FETCH_BUSINESS,
  FETCH_BUSINESS_SUCCESS,
  FETCH_BUSINESS_ERROR,
} from "../actionType";

const initialState = {
  loading: false,
  success: false,
  data: [],
  error: "",
};

const listBusinessReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BUSINESS_SUCCESS:
      return {
        success: true,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_BUSINESS_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default listBusinessReducer;
