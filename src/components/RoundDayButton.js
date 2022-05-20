import { Flex, Button, Text } from "@aws-amplify/ui-react";

export const RoundDayButton = (props) => {
  const text = props.text;

  const handleClick = () => {
    props.onClick();
  };

  return (
    <Flex style={styles.buttonIcon}>
      <Button style={styles.button} onClick={handleClick}>
        <Text style={styles.buttonText}>{text}</Text>
      </Button>
    </Flex>
  );
};

const styles = {
  button: {
    height: "12.5vw",
    width: "12.5vw",
    maxHeight: "50px",
    maxWidth: "50px",
    marginTop: "0.5rem",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 5px #000",
    borderRadius: "50%",
    border: "1px solid #000",
    justifyContent: "",
    alignItems: "center",
  },

  buttonText: {
    paddingTop: "0.25rem",
    fontSize: "1rem",
    fontFamily: "azonix",
    color: "#000",
  },
};
