import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: 12
  },
  title: {
    fontSize: 20
  }
});

const Post = ({ post, handleDelete }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {post.title}
        </Typography>
        <Typography variant="body2" component="p">
          {post.contents}
        </Typography>
      </CardContent>
      <Button onClick={() => handleDelete(post.id)}>Delete Post</Button>
    </Card>
  );
};

export default Post;
