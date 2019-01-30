import { createStore } from "redux";
import mainReducer from "../reducers/index";

let store = createStore(mainReducer);

export default store;
