
import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
//import { thunk } from "redux-thunk";
  
const middlewares=[logger]
export const store= configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>(getDefaultMiddleware({
        serializableCheck:false
    })).concat(
        middlewares
    )
});