import React, { useEffect, useState } from "react";
import { Image } from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";
import { Spinner } from "./Spinner";
import defaultProfilePicture from "../assets/images/profile.png";

import { checkImageURL } from "../utils/checkImageURL";

export const ProfilePicture = (props) => {
  const [profilePicture, setProfilePicture] = useState(defaultProfilePicture);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSavedProfilePicture();
  }, []);

  const key = `${props.user.given_name}${props.user.name}-${props.user.sub}`;
  const imageKitResizedImage = (width) =>
    `https://ik.imagekit.io/fzwpyzjcl9f/${key}?tr=w-${width || 100}`;

  async function getSavedProfilePicture() {
    await checkImageURL(imageKitResizedImage()).then((isValid) => {
      if (isValid) {
        setProfilePicture(imageKitResizedImage(100));
        setIsLoading(false);
      } else {
        setProfilePicture(defaultProfilePicture);
        setIsLoading(false);
      }
    });
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
    border: "0.5px solid #000",
    height: "30vw",
    maxHeight: "15vh",
    width: "25vw",
    maxWidth: "15vh",
    alignItems: "center",
    justifyContent: "center",
  },
};
