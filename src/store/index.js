import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { questionReducers, scoreReducers } from "./reducers/index.js";

const reducers = combineReducers({
  questionReducers,
  scoreReducers,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
