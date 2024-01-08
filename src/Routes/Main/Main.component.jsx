import { Row, Col, Container } from "./Main.styles";
import MediaCard from "../../Components/MediaCard.component";
import { fetchPosts } from "../../utils/php";
import { useEffect, useState } from "react";
import { selectIsAuth } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate=useNavigate()
  const isAuth=useSelector(selectIsAuth)
  if(!isAuth){
    navigate('/signin')
  }
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => {});
  }, []);

  return (
    <Container>
      <Row>
        <Col>{posts && posts.map((post) =>
       {
         const postData=post
         return  <MediaCard id={post.id} post={postData} />
         
      }
       
        )}
        </Col>
        <Col>profile</Col>
      </Row>
    </Container>
  );
};
export default Main;
