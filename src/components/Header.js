import { Text } from "@aws-amplify/ui-react";

import { ProfilePicture } from "./ProfilePicture";

function Header(props) {
  const { email, given_name, name, isAdmin } = props.user;

  return (
    <div style={styles.container}>
      <ProfilePicture user={props.user} />
      <div style={styles.userInfoContainer}>
        <Text style={styles.userInfoText}>
          {given_name} {name}
        </Text>
        <Text style={styles.userInfoText}> {email} </Text>
        <Text style={styles.userInfoText}>
          {isAdmin ? "Administrador" : "2x / Semana"}
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
    justifyContent: "space-around",
    alignItems: "flex-end",
  },

  userInfoText: {
    fontSize: "1.25rem",
    color: "#fff",
  },
};

export default Header;
