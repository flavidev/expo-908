import { useState, useEffect } from "react";

import { Flex, Image } from "@aws-amplify/ui-react";
import { getProfilePicture } from "../api/API";

export const Avatar = (props) => {
  const [profilePicture, setProfilePicture] = useState();

  useEffect(() => {
    handleGetProfilePicture();
  }, []);

  const handleOnClick = () => {
    props.onClick();
  };

  const handleGetProfilePicture = async () => {
    const profilePicture = await getProfilePicture(props.userId);
    setProfilePicture(profilePicture);
  };

  return (
    <Flex style={styles.container}>
      <Image
        onClick={handleOnClick}
        style={styles.avatar}
        src={profilePicture}
      />
    </Flex>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0.25rem",
  },

  avatar: {
    width: "10vw",
    height: "10vw",
    maxWidth: "75px",
    maxHeight: "75px",
    borderRadius: "50%",
    boxShadow: "0px 0px 1px ##000",
    border: "1px solid #000",
    alignItems: "center",
  },
};
