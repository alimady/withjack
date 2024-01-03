import { Row, Col, Container } from "./Main.styles";
import MediaCard from "../../Components/MediaCard.component";
import { fetchPosts } from "../../utils/php";
import { useEffect, useState } from "react";

const Main = () => {
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
