import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  productReducer
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
);
