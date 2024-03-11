import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../utils/php";
import { Like } from "../../utils/php";

const INITIAL_STATE = {
  postsMap: [],
};

export const getPostsAsync = (user_id) => (dispatch) => {
  fetchPosts().then((posts) => {
    dispatch(getPosts({ posts, user_id }));
  });
};

export const likePostAsync = (id, isliked) => (dispatch) => {
  if (!isliked) {
    Like(id)
      .then(dispatch(likePost(id)))
      .catch((e) => console.log(e));
  } else {
    Like(id)
      .then(dispatch(unlikePost(id)))
      .catch((e) => console.log(e));
  }
};
export const postSlice = createSlice({
  name: "post",
  initialState: INITIAL_STATE,
  reducers: {
    getPosts(state, action) {
      const { posts, user_id } = action.payload;
      state.postsMap = posts.map((post) => {
        const isLiked = post.likes.find((like) => like?.id === user_id)
          ? true
          : false;
        return { ...post, isLiked: isLiked };
      });
    },

    likePost(state, action) {
      state.postsMap = state.postsMap.map((post) => {
        if (post.id == action.payload) {
          return { ...post, likes_count: post.likes_count + 1, isLiked: true };
        }
        return post;
      });
    },
    unlikePost(state, action) {
      state.postsMap = state.postsMap.map((post) => {
        if (post.id == action.payload) {
          return { ...post, likes_count: post.likes_count - 1, isLiked: false };
        }
        return post;
      });
    },
  },
});

export const { getPosts } = postSlice.actions;
export const { likePost } = postSlice.actions;
export const { unlikePost } = postSlice.actions;
export const postReducer = postSlice.reducer;
