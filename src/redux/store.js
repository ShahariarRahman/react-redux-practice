import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import productReducer from "./productReducers/productReducer";

const store = createStore(productReducer, composeWithDevTools());

export default store;