import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartRedux"
import { someMiddleWare } from "../pages/Home";
import userReducer from "./userRedux"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import middleWare from "./middleware";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

// const rootReducer = undefined
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer })
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(middleWare),
    // applyMiddleware(someMiddleWare)

})

export let persistor = persistStore(store)