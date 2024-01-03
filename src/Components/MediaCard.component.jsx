import * as React from 'react';
import { CardMedia } from './MediaCard.style';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from 'moment';
export default function MediaCard({post}) {
  const {body,user,created_at}=post
  console.log(user)
  return (
    <Card sx={ [{display:'flex'},{marginBottom:1}]}>
      <CardMedia
           image={user.profile_mage}
          title={user.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body3" >
          {body}
        </Typography>
        <Typography gutterBottom variant="p" fontSize={11}  component="div" color="text.secondary">
          {moment(created_at).fromNow() } 
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}