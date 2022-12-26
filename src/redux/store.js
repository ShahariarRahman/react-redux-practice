import { createStore } from "redux";
import productReducer from "./productReducers/productReducer";

const store = createStore(productReducer);

export default store;