import React, { useEffect, useState } from "react";
import { Image } from "@aws-amplify/ui-react";
import { Spinner } from "./Spinner";

import { uploadProfilePicture, getProfilePicture } from "../api/API";

export const ProfilePicture = (props) => {
  const userId = props.user.sub;
  const [isLoading, setIsLoading] = useState(true);
  const [profilePicture, setProfilePicture] = useState();

  useEffect(() => {
    handleGetProfilePicture();
  }, []);

  const handleGetProfilePicture = async () => {
    setIsLoading(true);
    const profilePicture = await getProfilePicture(userId);
    setProfilePicture(profilePicture);
    setIsLoading(false);
  };

  async function handleFile(file) {
    setIsLoading(true);
    const picture = await uploadProfilePicture(userId, file);
    handleGetProfilePicture(picture);
  }

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  const hiddenFileInput = React.useRef(null);

  return (
    <>
      {isLoading && <Spinner />}

      {!isLoading && (
        <>
          <Image
            src={profilePicture}
            style={styles.profilePicture}
            onClick={handleClick}
          />
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
            onChange={handleChange}
            accept="image/*"
          />
        </>
      )}
    </>
  );
};

const styles = {
  profilePicture: {
    flex: 1,
    margin: "0.5rem",
    borderRadius: "50%",
    border: "0.5px solid #000",
    height: "30vw",
    maxHeight: "15vh",
    width: "25vw",
    maxWidth: "15vh",
    alignItems: "center",
    justifyContent: "center",
  },
};
