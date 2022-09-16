export const FETCH_BUSINESS = "FETCH_BUSINESS";
export const FETCH_BUSINESS_SUCCESS = "FETCH_BUSINESS_SUCCESS";
export const FETCH_BUSINESS_ERROR = "FETCH_BUSINESS_ERROR";
export const FETCH_BUSINESS_DETAILS = "FETCH_BUSINESS_DETAILS";
export const FETCH_BUSINESS_DETAILS_ERROR = "FETCH_BUSINESS_DETAILS_ERROR";
export const FETCH_BUSINESS_DETAILS_SUCCESS = "FETCH_BUSINESS_DETAILS_SUCCESS";
export const FETCH_BUSINESS_RESULTS = "FETCH_BUSINESS_RESULTS";
export const FETCH_BUSINESS_RESULTS_ERROR = "FETCH_BUSINESS_RESULTS_ERROR";
export const FETCH_BUSINESS_RESULTS_SUCCESS = "FETCH_BUSINESS_RESULTS_SUCCESS";
export const RESET_BLOCK_BUSINESS = "RESET_BLOCK_BUSINESS";
export const RESET_FLAGS_BUSINESS = "RESET_FLAGS_BUSINESS";

const block = {
  loading: false,
  error: "",
  success: false,
};

const initialState = {
  getBusiness: { ...block },
  getBusinessDetails: { ...block },
  getBusinessResults: { ...block },
};

export const BusinessReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESS:
      return { ...state, getBusiness: { ...state.getBusiness, loading: true } };
    case FETCH_BUSINESS_SUCCESS:
      return {
        ...state,
        getBusiness: {
          ...state.getBusiness,
          loading: false,
          success: true,
          error: "",
          data: action.data,
        },
      };
    case FETCH_BUSINESS_ERROR:
      return {
        ...state,
        getBusiness: {
          ...state.getBusiness,
          loading: false,
          error: action.error,
        },
      };

    case FETCH_BUSINESS_DETAILS:
      return {
        ...state,
        getBusinessDetails: { ...state.getBusinessDetails, loading: true },
      };
    case FETCH_BUSINESS_DETAILS_SUCCESS:
      return {
        ...state,
        getBusinessDetails: {
          ...state.getBusinessDetails,
          loading: false,
          success: true,
          error: "",
          data: action.data,
        },
      };
    case FETCH_BUSINESS_DETAILS_ERROR:
      return {
        ...state,
        getBusinessDetails: {
          ...state.getBusinessDetails,
          loading: false,
          error: action.error,
        },
      };

    case FETCH_BUSINESS_RESULTS:
      return {
        ...state,
        getBusinessResults: { ...state.getBusinessResults, loading: true },
      };
    case FETCH_BUSINESS_RESULTS_SUCCESS:
      return {
        ...state,
        getBusinessResults: {
          ...state.getBusinessResults,
          loading: false,
          success: true,
          error: "",
          data: action.data,
        },
      };
    case FETCH_BUSINESS_RESULTS_ERROR:
      return {
        ...state,
        getBusinessResults: {
          ...state.getBusinessResults,
          loading: false,
          error: action.error,
        },
      };

    //reset block with flag and data
    case RESET_BLOCK_BUSINESS:
      return {
        ...state,
        [action.blockType]: {
          ...initialState[action.blockType],
        },
      };

    //reset only flags(block)
    case RESET_FLAGS_BUSINESS:
      return {
        ...state,
        [action.blockType]: {
          ...state[action.blockType],
          ...block,
        },
      };

    default:
      return state;
  }
};
