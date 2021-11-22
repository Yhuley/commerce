import { createStore } from "redux";
import rootReducer from "./user-reducer";

const store = createStore(rootReducer, {})

export default store