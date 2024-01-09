
import styled from "styled-components";
import { Paper as PP } from "@mui/material";
import  { default as ed}  from '@mui/icons-material/Edit';


export const EditIcon=styled(ed)`
position:absolute !important;
color:#1976d2 !important;
font-size:16px !important;
left:75% !important;
top:20%;
border-radius:50%;
&:hover{
    background:gray;
    color:black !important;
}

 `
export const Paper =styled(PP)`
display:flex;
justify-content:center;
 padding:10px;
`
export const ProfileCard=styled.div`
background:white;
dispaly:flex;
justify-content:center;
margin-top:10px;
text-align:center;
position:relative;
`

export const ImageContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
width:100px;
height:100px;
overflow:hidden;
margin:auto;
position:relative;
`
export const ProfileImage=styled.img`
justify-self:center;
width:100%;
height:100%;
 `