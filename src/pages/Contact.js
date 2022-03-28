import React from "react";
import { Button } from "@aws-amplify/ui-react";

function Contact(props) {
  const user = props.user;

  const handleOpenWhatsApp = () => {
    window.open(
      `https://wa.me/5521995767154?text=E%20aê?!%20Aqui%20é%20${user.given_name}%20${user.name}.`,
      "_blank"
    );
  };

  const handleSendEmail = () => {
    window.open(
      "mailto:eaealta@gmail.com" +
        `?subject=E%20aê?!%20Aqui%20é%20${user.given_name}%20${user.name}.`
    );
  };

  return (
    <div style={styles.container}>
      <Button style={styles.button} onClick={handleOpenWhatsApp}>
        WhatsApp
      </Button>
      <Button style={styles.button} onClick={handleSendEmail}>
        Email
      </Button>
    </div>
  );
}

export default Contact;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100vw",
    height: "100%",
  },

  button: {
    color: "#000",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 5px #000",
    width: "33.33vw",
    height: "10vh",
    borderRadius: "5px",
    border: "1px solid #000",
  },
};
