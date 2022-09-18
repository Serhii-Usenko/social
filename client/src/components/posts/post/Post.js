import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import moment from 'moment';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Post = ({ post, setCurrentId }) => {
  return (
    <Card sx={{mt: '10px'}}>
      <CardMedia component="img" image={post.selectedFile} title={post.title} />
    <div>
      <Typography variant='h6'>{post.creator}</Typography>
      <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
    </div>
    <div>
      <Button
        size="small"
        onClick={() => setCurrentId(post._id)}
      >
        <ModeEditIcon />
      </Button>
    </div>
    <div>
      <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
    </div>
    <Typography variant="h5" gutterBottom>{post.title}</Typography>
    <CardContent>
      <Typography variant="h5" gutterBottom>{post.message}</Typography>
    </CardContent>
    <CardActions>
      <Button size='small' color='primary' onClick={() => {}}>
        Like
        {post.likeCount}
      </Button>
      <Button size='small' color='primary' onClick={() => {}}>
        Delete
      </Button>
    </CardActions>

    </Card>
  )
}

export default Post