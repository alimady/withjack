import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../utils/php";
import { Like } from "../../utils/php";
import { current } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  postsMap: [],
};


export const getPostsAsync = () => (dispatch) => {
  fetchPosts().then((posts) =>{
    dispatch(getPosts(posts))
  });
};

export const likePostAsync=(id,isliked)=>(dispatch)=>{
  //console.log("idddddddddddddddddd",id)
    if(isliked){
      console.log("islikeeeeeeeeeeee",isliked)

        Like(id).then(
            dispatch(likePost(id))
        ).catch(e =>console.log(e))
    }
    else{
      console.log("unlikeeeeeeeeeeeeeee")
        Like(id).then(
            dispatch(unlikePost(id))
        ).catch(e =>console.log(e))
    }
   

}
export const postSlice = createSlice({
  name: "post",
  initialState: INITIAL_STATE,
  reducers: {
    getPosts(state, action) {
      state.postsMap = action.payload;
    },
    likePost(state, action) {
      state.postsMap=current(state.postsMap).map((post) => {
         if(post.id==action.payload) {
         return {...post,likes_count:post.likes_count+1,isLiked:true}
         }
         return post
    });
       
    },
    unlikePost(state, action) {
      state.postsMap=current(state.postsMap).map((post) => {
        if(post.id==action.payload) {
        return {...post,likes_count:post.likes_count-1,isLiked:false}
        }
        return post
   });

      },
  },
});
export const { getPosts } = postSlice.actions;
export const { likePost } = postSlice.actions;
export const { unlikePost } = postSlice.actions;
export const postReducer = postSlice.reducer;
