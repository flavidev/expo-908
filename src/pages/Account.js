import React, { useState } from "react";

import { Image } from "@aws-amplify/ui-react";

import Plans from "./Plans";
import About from "./About";
import Contact from "./Contact";

import { CircleButton } from "../components/CircleButton";

import { RiArrowGoBackFill } from "react-icons/ri";

import planos from "../assets/images/planos.png";
import sair from "../assets/images/sair.png";

//import { IoMdExit } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { GrContact } from "react-icons/gr";

const Account = (props) => {
  const [isPlans, setIsPlans] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [IsContact, setIsContact] = useState(false);

  const handleSetIsPlan = () => {
    setIsPlans(true);
    setIsContact(false);
    setIsAbout(false);
  };

  const handleSetIsContact = () => {
    setIsPlans(false);
    setIsContact(true);
    setIsAbout(false);
  };

  const handleSetIsAbout = () => {
    setIsPlans(false);
    setIsContact(false);
    setIsAbout(true);
  };

  const handleGoBack = () => {
    setIsPlans(false);
    setIsContact(false);
    setIsAbout(false);
  };

  const handleSignOut = () => {
    if (window.confirm("Deseja sair?")) {
      props.signOut();
    }
  };

  return (
    <div style={styles.container}>
      {!isPlans && !IsContact && !isAbout && (
        <>
          <div style={styles.buttonsRow}>
            <CircleButton onClick={handleSetIsPlan} text="Planos">
              <Image src={planos} />
            </CircleButton>

            <CircleButton onClick={handleSetIsContact} text="Contato">
              <GrContact style={styles.icon} />
            </CircleButton>
          </div>

          <div style={styles.buttonsRow}>
            <CircleButton onClick={handleSetIsAbout} text="Sobre">
              <GiNotebook style={styles.icon} />
            </CircleButton>

            <CircleButton onClick={handleSignOut} text="Sair">
              <Image src={sair} />
            </CircleButton>
          </div>
        </>
      )}

      {IsContact && (
        <>
          <div style={styles.areaContainer}>
            <Contact user={props.user} />
          </div>
        </>
      )}

      {isPlans && (
        <>
          <div style={styles.areaContainer}>
            <Plans />
          </div>
        </>
      )}

      {isAbout && (
        <>
          <div style={styles.areaContainer}>
            <About />
          </div>
        </>
      )}

      {(IsContact || isPlans || isAbout) && (
        <RiArrowGoBackFill
          style={styles.icon}
          color="#fff"
          onClick={handleGoBack}
        />
      )}
    </div>
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
