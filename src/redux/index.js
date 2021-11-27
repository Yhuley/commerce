import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../reducers/root.reducer";
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: "root",
    storage,
    whiteList: ["cartReducer"],
    blacklist: ['userReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(logger))
const persistor = persistStore(store)

export { store, persistor }