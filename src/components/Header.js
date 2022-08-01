import { useContext } from "react";

import { View, Text, Divider } from "@aws-amplify/ui-react";
import { UserContext } from "../pages/Main";

import { ProfilePicture } from "./ProfilePicture";

import { ImPencil2 } from "react-icons/im";
import {
  HiOutlineEmojiHappy,
  HiOutlineEmojiSad,
  HiSpeakerphone,
} from "react-icons/hi";

function Header() {
  const { user, setMainState } = useContext(UserContext);
  const { isAdmin } = user;

  return (
    <View style={styles.container}>
      <ProfilePicture user={user} />
      <View style={styles.userInfoContainer}>
        <View
          style={styles.headerMenuOptions}
          onClick={() => setMainState("profile")}
        >
          <ImPencil2 style={styles.headerMenuIcon} />
          <Text style={styles.userInfoText}>Editar perfil</Text>
        </View>
        <Divider style={styles.divider} />
        <View
          style={styles.headerMenuOptions}
          onClick={() => setMainState("contact")}
        >
          <HiSpeakerphone style={styles.headerMenuIcon} />
          <Text style={styles.userInfoText}>Contato</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.headerMenuOptions}>
          {user.creditPoints > 0 ? (
            <HiOutlineEmojiHappy style={styles.headerMenuIcon} />
          ) : (
            <HiOutlineEmojiSad style={styles.headerMenuIcon} />
          )}
          <Text style={styles.userInfoText}>
            {isAdmin
              ? "Administrador"
              : `Aula${user.creditPoints > 1 ? "s" : ""}
             semana${user.creditPoints > 1 ? "is" : "l"}: ${user.creditPoints}`}
          </Text>
        </View>
      </View>
    </View>
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

  userInfoContainer: {
    display: "flex",
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },

  headerMenuOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
    alignItems: "center",
    margin: "0 0.5rem",
  },

  divider: {
    width: "80%",
    height: "1px",
    backgroundColor: "#fff",
  },

  headerMenuIcon: {
    color: "#fff",
    fontSize: "1.25rem",
  },

  userInfoText: {
    fontSize: "1.25rem",
    color: "#fff",
  },
};

export default Header;
