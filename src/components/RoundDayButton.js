import { Image, Divider, Text } from "@aws-amplify/ui-react";

import ball from "../assets/images/bola-eae.png";

export const RoundDayButton = (props) => {
  const text = props.text;

  const handleClick = () => {
    props.onClick();
  };

  return (
    <div style={styles.container} onClick={handleClick}>
      <Image src={ball} style={styles.ball} />
      <Text style={styles.buttonText}>{text}</Text>
      <Divider orientation="horizontal" size="small" />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0.25rem",
    cursor: "pointer",
  },
  ball: {
    height: "13vw",
    width: "13vw",
    maxHeight: "75px",
    maxWidth: "75px",
    borderRadius: "50%",
  },
  buttonText: {
    margin: "0.25rem",
    fontFamily: "Azonix",
    fontSize: "1rem",
    color: "#fff",
  },
};
