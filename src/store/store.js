
import { rootReducer } from "./rootReducer";
import { legacy_createStore as createStore,compose,applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const middleWares=[logger,thunk]
const composedEnhancer=compose(applyMiddleware(...middleWares))
export const store=createStore(rootReducer,undefined,composedEnhancer)
