import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bedroomReducer from "./bedroomReducers";
import kitchenReducer from "./kitchenReducers";

const rootReducer = combineReducers({
  bedroom: bedroomReducer,
  kitchen: kitchenReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
