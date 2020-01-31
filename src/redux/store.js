import { createStore } from "redux";
import pollingReducer from "./Polling/pollingReducer";
import { combineReducers } from "redux";
import homeReducer from "./ChangeHandlers/homeReducer";

const rootReducer = combineReducers({
  poll: pollingReducer,
  home: homeReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
