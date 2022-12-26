import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import productReducer from "./productReducers/productReducer";

const store = createStore(productReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;