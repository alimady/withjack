import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  isAuth: false,
  currentUser: null,
  error: null,
  isLoading: false,
};

export const userReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SIGNIN_START:
      return { ...state, isLoading: true };

    case USER_ACTION_TYPES.SIGNIN_SUCCESSED:
      return { ...state, currentUser: payload, isAuth: true ,isLoading:false,error:null};

    case USER_ACTION_TYPES.SIGNIN_FAILED:
      return { ...state, error: payload,isLoading:false };

    case USER_ACTION_TYPES.SIGNUP_START:
      return { ...state, isLoading: true };

    case USER_ACTION_TYPES.SIGNUP_SUCCESSED:
      return { ...state, currentUser: payload, isAuth: true,error:null };

    case USER_ACTION_TYPES.SIGNUP_FAILED:
      return { ...state, error: payload };

      case USER_ACTION_TYPES.SIGNOUT_START:
        return { ...state, currentUser: null,isAuth:false };

      case 'CLEAR_STATE_ERROR':
        return {...state,error:null}
    default:
      return state;
  }
};
