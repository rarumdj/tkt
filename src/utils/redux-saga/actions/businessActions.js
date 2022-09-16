import {
  FETCH_BUSINESS,
  FETCH_BUSINESS_DETAILS,
  FETCH_BUSINESS_RESULTS,
} from "../reducers/businessReducer";

export const getBusinessAction = (payload) => ({
  type: FETCH_BUSINESS,
  payload,
});

export const getBusinessDetialsAction = (payload) => ({
  type: FETCH_BUSINESS_DETAILS,
  payload,
});

export const getBusinessResultsAction = (payload) => ({
  type: FETCH_BUSINESS_RESULTS,
  payload,
});
