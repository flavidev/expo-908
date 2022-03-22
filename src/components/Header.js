import { Text } from "@aws-amplify/ui-react";

import { ProfilePicture } from "./ProfilePicture";

function Header(props) {
  const { email, given_name, name } = props.user;

  return (
    <div style={styles.container}>
      <ProfilePicture user={props.user} />
      <div style={styles.userInfoContainer}>
        <Text className="small-text">
          {" "}
          {given_name} {name}{" "}
        </Text>
        <Text className="small-text"> {email} </Text>
        <Text className="small-text"> Status financeiro: ATIVO </Text>
        <Text className="small-text"> Plano vigente: em breve</Text>
        <Text className="small-text"> Créditos semanais: em breve </Text>
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
