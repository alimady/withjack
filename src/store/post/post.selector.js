import { createSelector } from "reselect"
const postSelect=(state)=>state.posts

export const postSlice= createSelector(
[postSelect],
(posts)=>posts.postsMap
)

export const postSelector= createSelector(
    [postSlice],
    (posts)=>posts
    )

export const isLikePost=(state)=>{
   return state.posts.postsMap.map((post)=>{
    const isLiked= (post.likes[0]?.id)===(state.user.currentUser?.id)
      return {...post,isLiked:isLiked}
      
    })



}



