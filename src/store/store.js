
import { rootReducer } from "./rootReducer";
import { legacy_createStore as createStore,compose,applyMiddleware } from "redux";
import logger from "redux-logger";

const middleWares=[logger]
const composedEnhancer=compose(applyMiddleware(...middleWares))
export const store=createStore(rootReducer,undefined,composedEnhancer)
