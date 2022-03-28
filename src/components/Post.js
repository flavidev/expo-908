import { Text, Card, Button } from "@aws-amplify/ui-react";

export const Post = (props) => {
  const { post, deletePost } = props;

  const date = post.date;
  const time = post.time;

  const handleDeletePost = () => {
    deletePost(post.id);
    console.log(post);
  };

  return (
    <div style={styles.cardContainer}>
      <Card style={styles.card}>
        <div style={styles.authorAndTimeContainer}>
          <Text style={styles.author}>{post.author}:</Text>
          <Text style={styles.date}>
            {date} - {time}
          </Text>
        </div>
        <Text style={styles.contentText}>{post.content}</Text>
        <div style={styles.buttonContainer}>
          <Button onClick={handleDeletePost} style={styles.button}>
            <Text style={styles.buttonText}>X</Text>
          </Button>
        </div>
      </Card>
    </div>
  );
};

const styles = {
  cardContainer: {
    margin: "10px",
    width: "100%",
  },
  authorAndTimeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #000",
    outlined: true,
    width: "90vw",
    flexDirection: "row",
  },
  author: {
    fontSize: "1rem",
    color: "#8055a4",
    bold: true,
  },
  date: {
    fontSize: "0.75rem",
    color: "#8055a4",
  },
  contentText: {
    fontSize: 18,
    color: "#000",
    margin: "10px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: "10px",
  },
  button: {
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 5px #000",
    width: "2.5vw",
    height: "2.5vh",
    borderRadius: "5px",
    border: "1px solid #000",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#f00",
  },
};
