
import { rootReducer } from "./rootReducer";
import { legacy_createStore as createStore,compose,applyMiddleware } from "redux";
import logger from "redux-logger";
//import { thunk } from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./user/root-saga";
const sagaMiddleware=createSagaMiddleware()

 const middleWares=[logger,sagaMiddleware]
const composedEnhancer=compose(applyMiddleware(...middleWares))
export const store=createStore(rootReducer,undefined,composedEnhancer)
sagaMiddleware.run(rootSaga)
