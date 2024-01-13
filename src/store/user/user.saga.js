import { all, call, put,apply,fork, takeLeading } from "redux-saga/effects";
import { takeLatest,takeEvery,takeMaybe, take } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { LoginUser } from "../../utils/php";
import { createAction } from "../../utils/creatAction";

export const signinStart = (data) =>
  createAction(USER_ACTION_TYPES.SIGNIN_START, data);

export const signinSucess = (user) =>
  createAction(USER_ACTION_TYPES.SIGNIN_SUCCESSED, user);

export const signinFaild = (error) =>
  createAction(USER_ACTION_TYPES.SIGNIN_FAILED, error);

export function* signinAsync({payload:{email,password}}) {
   
  try {
  console.log("this is data", { email, password });
    const data={email,password}
    const currentUser =  yield call(LoginUser,{ email, password });
       console.log("this is currentUser",currentUser);
      yield put(signinSucess(currentUser));
   } catch (error) {
    yield put(signinFaild(error.response.data.errors));
  }
}

export function* onSigninStart(data) {
  yield takeLatest(USER_ACTION_TYPES.SIGNIN_START,signinAsync);
}

export function* userSaga() {
  yield all([call(onSigninStart)]);
}
