import { Flex, Button, Text } from "@aws-amplify/ui-react";

export const CircleButton = (props) => {
  const text = props.text;

  const handleClick = () => {
    props.onClick();
  };

  return (
    <Flex style={styles.buttonIcon}>
      <Button style={styles.button} onClick={handleClick}>
        {props.children}
      </Button>
      <Text style={styles.buttonText}>{text}</Text>
    </Flex>
  );
};

const styles = {
  button: {
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

  buttonIcon: {
    color: "#000",
    flexDirection: "column",
    fontSize: "1.25rem",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: "1.25rem",
    fontFamily: "azonix",
    color: "#fff",
  },
};
