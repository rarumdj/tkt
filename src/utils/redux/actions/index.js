import { getBusiness, getBusinessDetails, getBusinessResult } from "../../api";
import {
  FETCH_BUSINESS_DETAILS,
  FETCH_BUSINESS_DETAILS_SUCCESS,
  FETCH_BUSINESS_DETAILS_ERROR,
  FETCH_BUSINESS,
  FETCH_BUSINESS_SUCCESS,
  FETCH_BUSINESS_ERROR,
  FETCH_BUSINESS_RESULTS,
  FETCH_BUSINESS_RESULTS_SUCCESS,
  FETCH_BUSINESS_RESULTS_ERROR,
} from "../actionType";

import store from "../store";

export const fetchBusinessList = () => {
  return (dispatch) => {
    dispatch(fetchBusinessListRequest());
    // dispatch(filterCountriesRequest());

    getBusiness()
      .then((response) => {
        dispatch(fetchBusinessListSuccess(response.data));
        // dispatch(filterCountriesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchBusinessListFailure(error.message));
      });
  };
};

export const fetchBusiness = (code) => {
  return (dispatch) => {
    dispatch(fetchBusinessRequest());

    getBusinessDetails(code)
      .then((response) => {
        dispatch(fetchBusinessSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchBusinessFailure(error.message));
      });
  };
};

export const fetchBusinessResult = (code) => {
  return (dispatch) => {
    dispatch(fetchBusinessResultRequest());

    getBusinessResult(code)
      .then((response) => {
        dispatch(fetchBusinessResultSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchBusinessResultFailure(error.message));
      });
  };
};

export const fetchBusinessResultRequest = () => {
  return {
    type: FETCH_BUSINESS_RESULTS,
  };
};

export const fetchBusinessResultSuccess = (business) => {
  return {
    type: FETCH_BUSINESS_RESULTS_SUCCESS,
    payload: business,
  };
};

export const fetchBusinessResultFailure = (error) => {
  return {
    type: FETCH_BUSINESS_RESULTS_ERROR,
    payload: error,
  };
};

export const fetchBusinessRequest = () => {
  return {
    type: FETCH_BUSINESS_DETAILS,
  };
};

export const fetchBusinessSuccess = (business) => {
  return {
    type: FETCH_BUSINESS_DETAILS_SUCCESS,
    payload: business,
  };
};

export const fetchBusinessFailure = (error) => {
  return {
    type: FETCH_BUSINESS_DETAILS_ERROR,
    payload: error,
  };
};

export const fetchBusinessListRequest = () => {
  return {
    type: FETCH_BUSINESS,
  };
};

export const fetchBusinessListSuccess = (business) => {
  return {
    type: FETCH_BUSINESS_SUCCESS,
    payload: business,
  };
};

export const fetchBusinessListFailure = (error) => {
  return {
    type: FETCH_BUSINESS_ERROR,
    payload: error,
  };
};
