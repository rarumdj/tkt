import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history"; // eslint-disable-line
import createRootReducer from "./reducers";
import { sagas } from "./sagas";

export const history = createBrowserHistory();

const enhancers = [];
const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare, routerMiddleware(history)];

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line
//   middleware.push(logger);

//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension());
//   }
// }

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );

  sagaMiddleWare.run(sagas);

  return store;
}
