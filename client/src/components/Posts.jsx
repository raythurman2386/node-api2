import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import axios from "axios";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/posts/")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Grid container justify="center" spacing={2}>
      <Typography variant="h2">Blog Posts</Typography>
      {posts.map(post => (
        <Grid key={post.id} item>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
