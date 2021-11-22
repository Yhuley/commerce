import { createStore } from "redux";
import rootReducer from "../reducers/user.reducer";

const store = createStore(rootReducer, {})

export default store