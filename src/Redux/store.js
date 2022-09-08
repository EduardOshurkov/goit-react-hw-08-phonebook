import { createStore } from "redux";
import { reducer, initialStore } from "./reduser";

const store = createStore(reducer, initialStore);

export default store;




