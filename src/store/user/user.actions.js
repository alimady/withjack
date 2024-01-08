import { createAction } from "../../utils/creatAction";
import { USER_ACTION_TYPES } from "./user.types";
import axios from "axios";


 

export const signinStart = (data) =>
  createAction(USER_ACTION_TYPES.SIGNIN_START, data);

export const signinSucess = (user) =>
  createAction(USER_ACTION_TYPES.SIGNIN_SUCCESSED, user);

export const signinFaild = (error) =>
  createAction(USER_ACTION_TYPES.SIGNIN_FAILED,error);

export const signupStart = (data) =>
  createAction(USER_ACTION_TYPES.SIGNUP_START, data);

export const signupSuceess = (user) =>
  createAction(USER_ACTION_TYPES.SIGNUP_SUCCESSED, user);

export const signupFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGNUP_FAILED, error);

export const signoutStart=()=>createAction(USER_ACTION_TYPES.SIGNOUT_START)

export const reset=()=> createAction('CLEAR_STATE_ERROR')
