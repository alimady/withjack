import {
  ProfileCard,
  ProfileImage,
  ImageContainer,
  Paper,
  EditIcon
} from "./Profile.style";
import { Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { CalendarToday } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
 import moment from "moment";
const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const uploadimageHandler=()=>{
    document.getElementById('file_upload').click()
  }
  return (
    <Paper>
      <ProfileCard>
        <ImageContainer>
          <ProfileImage src={currentUser?.profile_mage} />
        </ImageContainer>
        <EditIcon onClick={() => uploadimageHandler()}/>
         <input type="file"id="file_upload" hidden='hidden' />
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
