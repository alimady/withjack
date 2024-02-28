import { Row, Col, Container } from "./Main.styles";
import MediaCard from "../../Components/MediaCard.component";
 import { useEffect, useState } from "react";
import { selectIsAuth } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { postSelector } from "../../store/post/post.selector";
import { redirect, useNavigate } from "react-router-dom";
import { selectUser } from "../../store/user/user.selector";
import Profile from "../Profile/Profile.component";
import { useDispatch } from "react-redux";
import { getPostsAsync } from "../../store/post/post.reducer";
import { isLikePost } from "../../store/post/post.selector";

const Main = () => {
  const navigate=useNavigate()
  const isAuth=useSelector(selectIsAuth)
  const currentUser=useSelector(selectUser)
  const posts=useSelector(postSelector)
  const dispatch=useDispatch()
  const postswithLike=useSelector(isLikePost)


  useEffect(()=>{
    if(!isAuth){
      navigate('/signin')
    }
  },[isAuth])
 
  useEffect(() => {
    dispatch(getPostsAsync())
  }, [currentUser]);

  return (
    <Container>
      <Row>
        <Col lg={5}>{postswithLike && postswithLike.map((post) =>
       {
         //const postData=post
         return  <MediaCard id={post.id} post={post} />
         
      }
       
        )}
        </Col>
        <Col lg={3}><Profile/></Col>
      </Row>
    
    </Container>
  );
};
export default Main;
