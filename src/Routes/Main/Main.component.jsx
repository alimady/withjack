import { Row, Col, Container } from "./Main.styles";
import MediaCard from "../../Components/MediaCard.component";
import { fetchPosts } from "../../utils/php";
import { useEffect, useState } from "react";
import { selectIsAuth } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { selectUser } from "../../store/user/user.selector";
import Profile from "../Profile/Profile.component";


const Main = () => {
  const navigate=useNavigate()
  const isAuth=useSelector(selectIsAuth)
  const currentUser=useSelector(selectUser)


  useEffect(()=>{
    if(!isAuth){
      navigate('/signin')
    }
  },[isAuth])
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => {});
  }, [currentUser]);

  return (
    <Container>
      <Row>
        <Col lg={5}>{posts && posts.map((post) =>
       {
         const postData=post
         return  <MediaCard id={post.id} post={postData} />
         
      }
       
        )}
        </Col>
        <Col lg={3}><Profile/></Col>
      </Row>
    
    </Container>
  );
};
export default Main;
