import {legacy_createStore as createStore,  compose}  from "redux";
import reducers from "./reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk))); //fırlatılan değeri yakalama