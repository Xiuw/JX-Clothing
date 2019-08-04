import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
const middlewares = [logger]; // make it easier to add more middleware here

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
