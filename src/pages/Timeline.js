import React, { useState } from "react";
import { ScrollView, TextField } from "@aws-amplify/ui-react";
import { CircleButton } from "../components/CircleButton";
import { BiMailSend } from "react-icons/bi";

import { v4 as uuidv4 } from "uuid";

import { Post } from "../components/Post";

const Timeline = (props) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    id: uuidv4(),
    author: `${props.user.given_name} ${props.user.name}`,
    content: "",
    time: "",
    date: "",
  });

  const handleDeletePost = (id) => {
    if (window.confirm("Tem certeza que deseja deletar essa postagem?")) {
      const newPosts = posts.filter((post) => post.id !== id);
      setPosts(newPosts);
    }
  };

  const resetNewPost = () => {
    setNewPost({ ...newPost, content: "", id: uuidv4() });
  };

  const handleSubmit = () => {
    setNewPost({
      ...newPost,
    });
    console.log("newPost time = " + newPost.time);
    const newPosts = [...posts, newPost];
    setPosts(newPosts);
    resetNewPost();
  };

  return (
    <div className="container">
      <div style={styles.scrollviewContainer}>
        <ScrollView orientation="vertical" style={styles.scrollview}>
          {posts
            .slice(0)
            .reverse()
            .map((post) => (
              <Post key={post.id} post={post} deletePost={handleDeletePost} />
            ))}
        </ScrollView>
      </div>
      <div style={styles.inputContainer}>
        <TextField
          placeholder="Digite o texto da sua postagem"
          isMultiline={true}
          style={styles.textfield}
          value={newPost.content}
          onChange={(event) =>
            setNewPost({
              ...newPost,
              content: event.target.value,
              time: new Date().toLocaleTimeString("pt-BR"),
              date: new Date().toLocaleDateString("pt-BR"),
            })
          }
        />
        <CircleButton
          style={styles.button}
          className="post-button"
          onClick={handleSubmit}
          size="small"
          theme="light"
        >
          <BiMailSend style={styles.icon} />
        </CircleButton>
      </div>
    </div>
  );
};

const styles = {
  scrollviewContainer: {
    width: "100vw",
    height: "55vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollview: {
    height: "100%",
    width: "100vw",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100vw",
    height: "10vh",
  },
  textfield: {
    borderRadius: "5px",
    boxShadow: "0px 0px 5px #000",
    backgroundColor: "#fff",
    color: "#000",
    width: "50vw",
    height: "10vh",
  },
  icon: {
    color: "#000",
    borderRadius: "5px",
    fontSize: "2.5rem",
  },
};

export default Timeline;
