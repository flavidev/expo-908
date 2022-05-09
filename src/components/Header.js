import { Text } from "@aws-amplify/ui-react";

import { ProfilePicture } from "./ProfilePicture";

function Header(props) {
  const { email, given_name, name, isAdmin } = props.user;

  return (
    <div style={styles.container}>
      <ProfilePicture user={props.user} />
      <div style={styles.userInfoContainer}>
        <Text className="small-text">
          {" "}
          {given_name} {name}{" "}
        </Text>
        <Text className="small-text"> {email} </Text>
        <Text className="small-text">
          {" "}
          Plano: {isAdmin ? "Administrador" : "2x"}
        </Text>

        <Text className="small-text">
          {" "}
          Créditos restantes: {isAdmin ? "99" : "2"}{" "}
        </Text>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "0.5rem",
  },

  inputButton: {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    width: "100%",
  },
  userInfoContainer: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
};

export default Header;
