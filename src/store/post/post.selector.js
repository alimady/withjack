import { createSelector } from "reselect";
import { store } from "../store";
const postSelect = (state) => state.posts;
const user = (state) => state.user;
export const postSlice = createSelector(
  [postSelect],
  (posts) => posts.postsMap
);

export const postSelector = createSelector([postSlice], (posts) => posts);

 
