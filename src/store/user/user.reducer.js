import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../../utils/php";
import { uploadProfile } from "../../utils/php";
import { createAsyncThunk } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isAuth: false,
  currentUser: null,
  error: null,
  isLoading: false,
};

export const uploadProfileImage = createAsyncThunk(
  "user/uploadProfileImage",
  async (image, { rejectWithValue }) => {
   return  uploadProfile(image).then(() => {
        return URL.createObjectURL(image);
     });
  }
);

export const signInStart = createAsyncThunk(
  "user/signInStart",
  async (user, { rejectWithValue }) => {
    return LoginUser(user)
      .then((currentUser) => {
        //dispatch(signinSucess(currentUser));
        localStorage.setItem("token", currentUser.token);
        return currentUser.user;
      })
      .catch((error) => {
        //dispatch(signinSucess(error));
        rejectWithValue(error);
      });
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    signupStart(state) {
      state.isLoading = true;
    },
    signupSucess(state, action) {
      state.currentUser = action.payload;
    },
    signupFailed(state, action) {
      state.error = action.payload;
    },
    signout(state) {
      state.currentUser = null;
      state.isAuth=false;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInStart.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoading = false;
        state.isAuth = true;
      })
      .addCase(signInStart.pending, (state, action) => {
         state.isLoading = true;
      })
      .addCase(signInStart.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(uploadProfileImage.fulfilled, (state, action) => {
        state.currentUser.image_url = action.payload;
      });
  },
});

export const { signinSucess } = userSlice.actions;
export const { signinFailed } = userSlice.actions;
export const { signupStart } = userSlice.actions;
export const { signupSucess } = userSlice.actions;
export const { signupFailed } = userSlice.actions;
export const { clearError } = userSlice.actions;
export const { signout } = userSlice.actions;
export const userReducer = userSlice.reducer;

// export const userReducer = (state = INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SIGNIN_START:
//       return { ...state, isLoading: true };

//     case USER_ACTION_TYPES.SIGNIN_SUCCESSED:
//       return { ...state, currentUser: payload, isAuth: true ,isLoading:false,error:null};

//     case USER_ACTION_TYPES.SIGNIN_FAILED:
//       return { ...state, error: payload,isLoading:false };

//     case USER_ACTION_TYPES.SIGNUP_START:
//       return { ...state, isLoading: true };

//     case USER_ACTION_TYPES.SIGNUP_SUCCESSED:
//       return { ...state, currentUser: payload, isAuth: true,error:null };

//     case USER_ACTION_TYPES.SIGNUP_FAILED:
//       return { ...state, error: payload };

//     case USER_ACTION_TYPES.SIGNOUT_START:
//         return { ...state, currentUser: null,isAuth:false };

//     case USER_ACTION_TYPES.UPDATE_USER_PROFILE:
//         return {...state,currentUser:{...state.currentUser,image_url:payload}}

//     case 'CLEAR_STATE_ERROR':
//         return {...state,error:null}
//     default:
//       return state;
//   }
// };
