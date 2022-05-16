import { Flex, Button, Text } from "@aws-amplify/ui-react";

export const CircleButton = (props) => {
  const text = props.text;
  const size = props.size ? props.size : "big";

  const handleClick = () => {
    props.onClick();
  };

  return (
    <Flex style={styles.buttonIcon}>
      <Button
        style={size === "big" ? styles.buttonBig : styles.buttonSmall}
        onClick={handleClick}
      >
        {props.children}
      </Button>
      <Text
        style={size === "big" ? styles.buttonTextWhite : styles.buttonTextBlack}
      >
        {text}
      </Text>
    </Flex>
  );
};

const styles = {
  buttonBig: {
    color: "#000",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 5px #000",
    height: "15vh",
    width: "15vh",
    borderRadius: "50%",
    border: "1px solid #000",
    fontSize: "1.25rem",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSmall: {
    color: "#fff",
    backgroundColor: "#000",
    boxShadow: "0px 0px 5px #000",
    height: "7.5vh",
    width: "7.5vh",
    borderRadius: "50%",
    border: "1px solid #000",
    fontSize: "1.25rem",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonIcon: {
    color: "#fff",
    flexDirection: "column",
    fontSize: "1.25rem",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextWhite: {
    fontSize: "1.25rem",
    fontFamily: "azonix",
    color: "#fff",
  },
  buttonTextBlack: {
    fontSize: "1.25rem",
    fontFamily: "azonix",
    color: "#000",
  },
};
