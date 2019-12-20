import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import appReducer from './ducks';

import { Types } from './ducks/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [ReduxThunk];

const rootReducer = (state, action) =>
  action.type === Types.LOGOUT
    ? appReducer(undefined, action)
    : appReducer(state, action);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;