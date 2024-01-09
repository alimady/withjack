
import { CardMedia as card } from "@mui/material";
import styled from "styled-components";
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardActions from '@mui/material/CardActions';

export const ReactionContainer=styled(CardActions)`
position:relative;
dispay:block !important;
bottom:-15%;
span{
    font-size:11px;
}`



export const Like=styled(FavoriteIcon)`

`

export const UnLike=styled(FavoriteBorderIcon)`

`

export const Comment=styled(ChatIcon)`

`

export const CardMedia=styled(card)`
margin-bottom:10px !important;
flex-basis: 140px;
flex-grow: 0;
flex-shrink: 0;
 `

