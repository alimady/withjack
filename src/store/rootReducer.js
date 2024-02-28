 import { userReducer } from "./user/user.reducer";
 import { postReducer } from "./post/post.reducer";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer=combineReducers({
 user:userReducer,
 posts:postReducer
})