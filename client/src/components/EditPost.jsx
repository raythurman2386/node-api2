import React, { useState, useEffect } from "react";
import { TextField, Container, Button, Typography } from "@material-ui/core";
import axios from "axios";

const EditPost = props => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const { id } = props.match.params;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/api/posts/${id}`)
      .then(res => {
        console.log(res.data[0]);

        console.log(res.data[0].title);
        console.log(res.data[0].contents);

        setTitle(res.data[0].title);
        setContents(res.data[0].contents);
      })
      .catch(err => console.log(err.response));
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    const updatedPost = {
      title,
      contents
    };

    console.log(updatedPost);
    axios
      .put(`http://127.0.0.1:5000/api/posts/${id}`, updatedPost)
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
          Update Post
        </Button>
      </form>
    </Container>
  );
};

export default EditPost;
