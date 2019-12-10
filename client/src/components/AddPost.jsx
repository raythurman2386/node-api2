import React, { useState } from "react";
import { TextField, Container, Button, Typography } from "@material-ui/core";
import axios from "axios";

const AddPost = props => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      title,
      contents
    };

    console.log(newPost);
    axios
      .post("http://127.0.0.1:5000/api/posts/", newPost)
      .then(res => props.history.push("/"))
      .catch(err => console.log(err.response));
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Add New Post</Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Post"
          variant="filled"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <TextField
          id="filled-basic"
          label="Contents"
          variant="filled"
          value={contents}
          onChange={e => setContents(e.target.value)}
          required
        />
        <Button type="submit" color="primary" fullwidth="true">
          Add Post
        </Button>
      </form>
    </Container>
  );
};

export default AddPost;
