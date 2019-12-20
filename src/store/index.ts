import { createStore, applyMiddleware, compose } from "store";
import ReduxThunk from "redux-thunk";
import appReducer from "./ducks";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
import { Types } from "./ducks/user";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [ReduxThunk];

const rootReducer = (state, action) =>
  action.type === Types.LOGOUT
    ? appReducer(undefined, action)
    : appReducer(state, action);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
