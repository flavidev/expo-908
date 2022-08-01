import React, { useContext } from "react";
import { View, Image } from "@aws-amplify/ui-react";

import { UserContext } from "./Main";

import { CircleButton } from "../components/CircleButton";

import { GiThreeFriends } from "react-icons/gi";

import sair from "../assets/images/sair.png";
import carteirinha from "../assets/images/carteirinha.png";
import logo from "../assets/images/eae-alt-logo.png";

const Account = (props) => {
  const { setMainState } = useContext(UserContext);

  const handleSignOut = () => {
    if (window.confirm("Deseja encerrar a sessão?")) {
      props.signOut();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsRow}>
        <CircleButton onClick={() => setMainState("idCard")} text="Carteira">
          <Image src={carteirinha} />
        </CircleButton>
        <CircleButton onClick={() => setMainState("about")} text="Sobre">
          <Image src={logo} />
        </CircleButton>
      </View>

      <View style={styles.buttonsRow}>
        <CircleButton onClick={() => setMainState("partners")} text="Parcerias">
          <GiThreeFriends style={styles.icon} />
        </CircleButton>
        <CircleButton onClick={handleSignOut} text="Sair">
          <Image src={sair} />
        </CircleButton>
      </View>
    </View>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonsRow: {
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "0 4rem",
    alignItems: "center",
  },
  areaContainer: {
    height: "100%",
  },

  icon: {
    margin: "0.5rem",
    fontSize: "3rem",
  },
};

export default Account;
