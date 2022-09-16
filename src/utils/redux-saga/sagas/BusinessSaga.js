import { all, call, put, takeLatest } from "redux-saga/effects";
import { Axios } from "../../api";
import {
  FETCH_BUSINESS,
  FETCH_BUSINESS_DETAILS,
  FETCH_BUSINESS_DETAILS_ERROR,
  FETCH_BUSINESS_DETAILS_SUCCESS,
  FETCH_BUSINESS_ERROR,
  FETCH_BUSINESS_RESULTS,
  FETCH_BUSINESS_RESULTS_ERROR,
  FETCH_BUSINESS_RESULTS_SUCCESS,
  FETCH_BUSINESS_SUCCESS,
  RESET_FLAGS_BUSINESS,
} from "../reducers/businessReducer";

async function getBusiness() {
  return await Axios.get("/biz");
}

function* handleGetBusiness({ payload }) {
  try {
    const response = yield call(getBusiness, payload);
    if (response) {
      yield put({
        type: FETCH_BUSINESS_SUCCESS,
        data: response.data,
      });
      yield put({
        type: RESET_FLAGS_BUSINESS,
        blockType: "getBusiness",
      });
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
    yield put({
      type: FETCH_BUSINESS_ERROR,
      error,
    });
  }
}

async function getBusinessDetails(payload) {
  return await Axios.get("/biz/" + payload);
}

function* handleGetBusinessDetails({ payload }) {
  try {
    const response = yield call(getBusinessDetails, payload);
    if (response) {
      yield put({
        type: FETCH_BUSINESS_DETAILS_SUCCESS,
        data: response.data,
      });
      yield put({
        type: RESET_FLAGS_BUSINESS,
        blockType: "getBusinessDetials",
      });
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
    yield put({
      type: FETCH_BUSINESS_DETAILS_ERROR,
      error,
    });
  }
}

async function getBusinessResult(payload) {
  return await Axios.get("/result/" + payload);
}

function* handleGetBusinessResults({ payload }) {
  try {
    const response = yield call(getBusinessResult, payload);
    if (response) {
      yield put({
        type: FETCH_BUSINESS_RESULTS_SUCCESS,
        data: response.data,
      });
      yield put({
        type: RESET_FLAGS_BUSINESS,
        blockType: "getBusinessResults",
      });
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
    yield put({
      type: FETCH_BUSINESS_RESULTS_ERROR,
      error,
    });
  }
}

export default all([
  takeLatest(FETCH_BUSINESS, handleGetBusiness),
  takeLatest(FETCH_BUSINESS_DETAILS, handleGetBusinessDetails),
  takeLatest(FETCH_BUSINESS_RESULTS, handleGetBusinessResults),
]);
