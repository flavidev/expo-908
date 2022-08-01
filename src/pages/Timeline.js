import React, { useContext, useState } from "react";
import { UserContext } from "./Main";

import { ScrollView, TextAreaField, View } from "@aws-amplify/ui-react";
import { CircleButton } from "../components/CircleButton";
import { BiMailSend } from "react-icons/bi";

import { v4 as uuidv4 } from "uuid";

import { Post } from "../components/Post";

const Timeline = () => {
  const { user } = useContext(UserContext);

  const [posts, setPosts] = useState([]);

  const [newPost, setNewPost] = useState({
    id: uuidv4(),
    author: `${user.given_name} ${user.name}`,
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
    <View style={styles.container}>
      <ScrollView orientation="vertical" style={styles.scrollview}>
        {posts
          .slice(0)
          .reverse()
          .map((post) => (
            <Post key={post.id} post={post} deletePost={handleDeletePost} />
          ))}
      </ScrollView>

      {user.isAdmin && (
        <View style={styles.inputContainer}>
          <TextAreaField
            placeholder="Digite o texto da sua postagem"
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
        </View>
      )}
    </View>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  scrollview: {
    flexDirection: "column",
    flex: 4,
    height: "66%",
    width: "100vw",
  },
  inputContainer: {
    flex: 1,
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
