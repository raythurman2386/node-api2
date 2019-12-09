import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/posts/")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <>
          <h1>{post.title}</h1>
          <p>{post.contents}</p>
        </>
      ))}
    </div>
  );
};

export default Posts;
