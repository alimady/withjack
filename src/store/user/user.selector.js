import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const selectUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser
);

export const selectCurrentUser = createSelector([selectUser], (user) => {
   return user;
});

export const selectCurrentError = createSelector(
  [selectUserReducer],
  (errorSlice) => errorSlice.error
);

export const selectLoginError=createSelector(
    [selectCurrentError],
    (error)=>error
)

export const checkUser=createSelector(
    [selectUserReducer],(user)=>{
        return user?.isAuth;
    }
)

export const selectIsAuth=createSelector(
    [checkUser],(isAuth)=>{
        return isAuth
    })