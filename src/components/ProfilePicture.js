import React, { useEffect, useState } from "react";
import { Image } from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";
import { Spinner } from "./Spinner";
import defaultProfilePicture from "../assets/images/profile.png";

export const ProfilePicture = (props) => {
  const [profilePicture, setProfilePicture] = useState(defaultProfilePicture);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSavedProfilePicture();
  }, []);

  const key = props.user.sub + ".png";

  async function getSavedProfilePicture() {
    const list = await Storage.list(key);
    if (list.length > 0) {
      await Storage.get(key, { download: true })
        .then((result) => {
          return URL.createObjectURL(result.Body);
        })
        .catch((err) => {
          console.log(err);
        })
        .then((url) => {
          setIsLoading(false);
          setProfilePicture(url);
        });
    } else {
      setIsLoading(false);
    }
  }

  async function handleFile(file) {
    setIsLoading(true);
    try {
      const list = await Storage.list(key);
      if (list.length > 0) {
        await Storage.remove(key);
      }

      const response = await Storage.put(key, file, {
        contentType: "image/png",
        progressCallback: (progress) => {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
      });
      console.log(response);
      setIsLoading(false);
      const uploadedImage = URL.createObjectURL(file);
      setProfilePicture(uploadedImage);
    } catch (error) {
      console.log("Error uploading file:", error);
    }
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
    border: "1px solid white",
    maxHeight: "200px",
    maxWidth: "200px",
    height: "30vw",
    width: "25vw",
    alignItems: "center",
    justifyContent: "center",
  },
};
