import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../reducers/root.reducer";
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage';
import { fetchCollectionsStart } from "../reducers/shop/shop.sagas";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ['userReducer', 'shopReducer', 'directoryReducer']
}

const sagaMiddleware = createSagaMiddleware()

const miiddlewares = [sagaMiddleware]

if (process.env.NODE_ENV === "development") miiddlewares.push(logger)

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(...miiddlewares))

sagaMiddleware.run(fetchCollectionsStart)

const persistor = persistStore(store)

export { store, persistor }