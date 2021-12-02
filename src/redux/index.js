import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../reducers/root.reducer";
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ['userReducer', 'shopReducer', 'directoryReducer']
}

const miiddlewares = [thunk]

if (process.env.NODE_ENV === "development") miiddlewares.push(logger)

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(...miiddlewares))
const persistor = persistStore(store)

export { store, persistor }