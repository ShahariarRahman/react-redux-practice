import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import cartCounter from "./middleware/cartCounter";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, cartCounter)));

export default store;