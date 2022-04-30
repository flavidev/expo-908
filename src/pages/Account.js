import React, { useState } from "react";
import { Button, Image } from "@aws-amplify/ui-react";

import Plans from "./Plans";
import About from "./About";
import Contact from "./Contact";

import arrow from "../assets/images/arrow-back.png";

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

  return (
    <div style={styles.container}>
      {!isPlans && !IsContact && !isAbout && (
        <>
          <div style={styles.buttonsRow}>
            <Button style={styles.button} onClick={handleSetIsPlan}>
              Planos
            </Button>
            <Button style={styles.button} onClick={handleSetIsAbout}>
              Sobre
            </Button>
            <Button style={styles.button} onClick={handleSetIsContact}>
              Contato
            </Button>
            <Button style={styles.button} onClick={props.signOut}>
              Sair
            </Button>
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
        <Image src={arrow} style={styles.goBackArrow} onClick={handleGoBack} />
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
    flexDirection: "column",
    justifyContent: "space-around",
    margin: "0 4rem",
    alignItems: "center",
  },
  areaContainer: {
    height: "100%",
  },
  button: {
    color: "#000",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 5px #000",
    height: "7.5vh",
    width: "65vw",
    borderRadius: "5px",
    border: "1px solid #000",
    fontSize: "1.25rem",
    justifyContent: "center",
    alignItems: "center",
  },
  goBackArrow: {
    margin: "0.5rem 0 0.5rem 0",
    width: "15vw",
    maxWidth: "50px",
  },
};

export default Account;
