import * as React from "react";
import { CardMedia } from "./MediaCard.style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ReactionContainer, Like, Comment, UnLike } from "./MediaCard.style";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { likePostAsync } from "../store/post/post.reducer";
 
export default function MediaCard({ post }) {
  const { body, user, created_at, likes_count, id, isLiked} = post;
  const [lgShow, setLgShow] = useState(false);
  const[likedIt,setLiked]=useState(isLiked)
  console.log("--------------",likedIt)
  const dispatch = useDispatch();
  const commentHandler = () => {
    setLgShow(true);
  };

  useEffect(()=>{
  
    
  },[likedIt])

  const LikeHandler = (s) => {
     dispatch(likePostAsync(id,s));
     setLiked(s)
  };
  return (
    <Card
      sx={[{ display: "flex" }, { marginBottom: 1 }, { position: "relative" }]}
    >
      <CardMedia image={user.image_url} title={user.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body3" sx={{ wordBreak: "break-word" }}>
          {body}
        </Typography>
        <Typography
          gutterBottom
          variant="p"
          fontSize={11}
          component="div"
          color="text.secondary"
        >
          {moment(created_at).fromNow()}
        </Typography>
        <ReactionContainer>
          <div>
            { likedIt && likes_count >0 ? (
              <Like onClick={() => LikeHandler(false)} />
            ) : (
              <UnLike onClick={() => LikeHandler(true)} />
            )}{" "}
            <span className="like_count">{likes_count}</span>
          </div>{" "}
          <div>
            <Comment onClick={() => commentHandler()} />
            <span className="comment_count">0</span>
          </div>
        </ReactionContainer>
      </CardContent>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </Card>
  );
}
