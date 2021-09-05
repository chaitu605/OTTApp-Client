import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import loginReducer from "./Reducers/loginreducer";
import videoReducer from "./Reducers/videoReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const allReducers = combineReducers({
  user: loginReducer,
  videos: videoReducer,
});

const store = createStore(
  allReducers,
  compose(composeWithDevTools(applyMiddleware(thunkMiddleware)))
);
console.log(store.getState());
export default store;
