import { combineReducers } from "redux";
import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const rootReducer = combineReducers({ userReducer, cartReducer, directoryReducer, shopReducer })

export default rootReducer