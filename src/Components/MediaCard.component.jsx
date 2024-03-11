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
import { useState, useEffect } from "react";
import { likePostAsync } from "../store/post/post.reducer";
import { useRef } from "react";
import { isLikePost } from "../store/post/post.selector";
import { LikePush } from "../utils/pusher";
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';


export default function MediaCard({ post }) {
  const { body, user, created_at, likes_count, id, isLiked } = post;
  const [lgShow, setLgShow] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const commentHandler = () => {
    setLgShow(true);
  };

  useEffect(() => {
//     var pusher = new Pusher("987070fa3dfa9fe0df7d", {
//       broadcaster: 'pusher',
//       cluster: "ap2",
//      // authEndpoint:"http://localhost:8000/broadcasting/auth",
//       //endpoint: "/pusher_auth.php",
      
//       //broadcaster: 'pusher',
//       // appId: '1743179',
//       // key: '987070fa3dfa9fe0df7d',
//       // secret: '1fbe0c229ae5be770030',
//       // forceTLS: false,
//       // disableStats: true,
//       // userAuthentication: { endpoint: "/pusher_user_auth.php"
//       encrypted: true,

//     }
      
//     );

//     const channel = pusher.subscribe("private-App.Models.User."+user.id);

//     channel.bind('Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', (data) => {       
//     alert("hiiiiiiiiiii")
     
// })
  
const options = {
  broadcaster: 'pusher',
  key: '987070fa3dfa9fe0df7d',
  cluster: 'ap2',
  forceTLS: true,
  //authEndpoint is your apiUrl + /broadcasting/auth
  authEndpoint: "http://localhost:8000/broadcasting/auth", 
  // As I'm using JWT tokens, I need to manually set up the headers.
  auth: {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  },
};

const echo = new Echo(options);
echo.private(`App.Models.User.${user.id}`).notification((data) => {
    alert("okk")
});

}, []);

  const LikeHandler = (s, user_id = null) => {
    dispatch(likePostAsync(id, s));
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
            {isLiked === true && likes_count > 0 ? (
              <Like onClick={() => LikeHandler(isLiked)} />
            ) : (
              <UnLike onClick={() => LikeHandler(isLiked, user.id)} />
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
