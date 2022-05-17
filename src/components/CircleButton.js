import { Flex, Text } from "@aws-amplify/ui-react";

export const CircleButton = (props) => {
  const text = props.text;
  const size = props.size ? props.size : "big";
  const theme = props.theme ? props.theme : "light";

  const handleClick = () => {
    props.onClick();
  };

  return (
    <Flex
      style={theme === "light" ? styles.buttonIconLight : styles.buttonIconDark}
    >
      <Flex
        style={{
          height: size === "big" ? "15vh" : "7.5vh",
          width: size === "big" ? "15vh" : "7.5vh",
          backgroundColor: theme === "light" ? "#fff" : "#000",
          borderRadius: "50%",
          border: theme === "light" ? "1px solid #000" : "1px solid #fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {props.children}
      </Flex>
      <Text
        style={{
          fontFamily: "Azonix",
          fontSize: size === "big" ? "1.5rem" : "1rem",
          color: theme === "light" ? "#fff" : "#000",
        }}
      >
        {text}
      </Text>
    </Flex>
  );
};

const styles = {
  buttonIconLight: {
    color: "#000",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIconDark: {
    color: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  /*
  buttonSmall: {
    color: "#fff",
    backgroundColor: "#000",
    boxShadow: "0px 0px 5px #000",
    height: "7.5vh",
    width: "7.5vh",
    borderRadius: "50%",
    border: "1px solid #000",
    fontSize: "1.5rem",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextWhite: {
    fontSize: "1rem",
    fontFamily: "azonix",
    color: "#fff",
  },
  buttonTextBlack: {
    fontSize: "1rem",
    fontFamily: "azonix",
    color: "#000",
  },*/
};
