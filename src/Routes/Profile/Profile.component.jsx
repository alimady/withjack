import {
  ProfileCard,
  ProfileImage,
  ImageContainer,
  Paper,
  EditIcon,
} from "./Profile.style";
import { Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { CalendarToday } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useEffect, useState } from "react";
import moment from "moment";
import { uploadProfile } from "../../utils/php"; 
import { updateProfileStart } from "../../store/user/user.saga";
import { useDispatch } from "react-redux";

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  //console.log("image_url",currentUser.image_url)
  const [selectedAvatar, setSelectedAvatar] = useState();
  const [profile, setIsChanged] = useState(false);
  const dispatch=useDispatch()
  useEffect(() => {
    console.log("changed-----------")
    setSelectedAvatar(currentUser?.image_url);
  }, [profile]);

  const uploadimageHandler = () => {
    document.getElementById("file_upload").click();
  };

  const onChangeHandler = (e) => {
    const newImageURL=URL.createObjectURL(e.target.files[0])
    const newImage=e.target.files[0];
    if (!e.target.files || !e.target.files.length) {
      //setSelectedAvatar("");
      return;
    }
    //setSelectedAvatar(URL.createObjectURL(e.target.files[0]));
    uploadProfile(newImage).then((res) => {
       dispatch(updateProfileStart(newImageURL))
       setIsChanged(true);
    });
  };

  return (
    <Paper>
      <ProfileCard>
        <ImageContainer>
          <ProfileImage id="profile" src={currentUser?.image_url} />
        </ImageContainer>
        <EditIcon onClick={() => uploadimageHandler()} />
        <input
          type="file"
          id="file_upload"
          onChange={(e) => onChangeHandler(e)}
          hidden="hidden"
        />
        <h5>@{currentUser?.name}</h5>
        <hr />
        <Typography variant="body2"> hi there i am ali </Typography>
        <hr />
        <LocationOn color="primary" />
        <span>sy</span>
        <hr />
        <LinkIcon color="primary" />{" "}
        <a href="" style={{ textDecoration: "none" }} target="blank">
          www.Ali.com
        </a>
        <hr />
        <CalendarToday /> Joined At {moment(currentUser?.created_at).fromNow()}
      </ProfileCard>
    </Paper>
  );
};
export default Profile;
