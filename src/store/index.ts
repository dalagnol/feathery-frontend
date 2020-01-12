import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import appReducer from "./ducks";

import Action from "./interfaces/action";

import { Types } from "./ducks/user";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [ReduxThunk];

const rootReducer = (state: any, action: Action) =>
  action.type === Types.LOGOUT
    ? appReducer(undefined, action)
    : appReducer(state, action);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
