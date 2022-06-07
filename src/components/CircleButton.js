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
          backgroundColor: theme === "light" ? "#fff" : "",
          borderRadius: "50%",
          border: theme === "light" ? "1px solid #000" : "",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {props.children}
      </Flex>
      {text && (
        <Text
          style={{
            fontFamily: "Azonix",
            fontSize: size === "big" ? "1.5rem" : "1rem",
            color: theme === "light" ? "#fff" : "#000",
          }}
        >
          {text}
        </Text>
      )}
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
};
