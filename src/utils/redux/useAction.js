import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as actions from "./actions";
import { useMemo } from "react";

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actions, dispatch);
  }, [dispatch]);
};