import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import { CircleButton } from "../components/CircleButton";

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
      <CircleButton onClick={handleOpenWhatsApp} text="WhatsApp">
        <IoLogoWhatsapp style={styles.icon} color="#075e54" />
      </CircleButton>

      <CircleButton onClick={handleSendEmail} text="Email">
        <MdEmail style={styles.icon} color="#f00" />
      </CircleButton>
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

  icon: {
    fontSize: "3.5rem",
  },
};
