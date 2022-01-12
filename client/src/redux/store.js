import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartRedux"
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
import statusRedux from "./statusRedux";
import themeRedux from "./themeRedux";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const rootReducer = combineReducers(
    {
        user: userReducer,
        status: statusRedux,
        cart: cartReducer,
        theme: themeRedux
    })
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(middleWare),

})

export let persistor = persistStore(store)