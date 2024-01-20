import { createAction } from "../../utils/creatAction";
import { USER_ACTION_TYPES } from "./user.types";
import axios from "axios";
import { LoginUser } from "../../utils/php";

 

export const signinStart = ( ) =>
  createAction(USER_ACTION_TYPES.SIGNIN_START);

export const signinSucess = (user) =>
  createAction(USER_ACTION_TYPES.SIGNIN_SUCCESSED, user);

export const signinFaild = (error) =>
  createAction(USER_ACTION_TYPES.SIGNIN_FAILED,error);

export const signinAsync=(data)=>(dispatch)=>{
 dispatch(signinStart())
  LoginUser(data).then((userData)=>{
    dispatch(signinSucess(userData))
  }).catch((error)=>{
     dispatch(signinFaild(error.response.data.errors))
  })
}


export const signupStart = (data) =>
  createAction(USER_ACTION_TYPES.SIGNUP_START, data);

export const signupSuceess = (user) =>
  createAction(USER_ACTION_TYPES.SIGNUP_SUCCESSED, user);

export const signupFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGNUP_FAILED, error);

export const signoutStart=()=>createAction(USER_ACTION_TYPES.SIGNOUT_START)

export const reset=()=> createAction('CLEAR_STATE_ERROR')
