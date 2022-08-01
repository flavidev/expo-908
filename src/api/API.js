import axios from "axios";
import { Storage } from "aws-amplify";

import { Auth } from "aws-amplify";

const api = axios.create({
  baseURL: "https://v2ph0dafi3.execute-api.sa-east-1.amazonaws.com/dev/eae/",
});

export const updateUserAttributes = async (props) => {
  const { given_name, name, phone_number, birthdate, gender, address } = props;
  const user = await Auth.currentAuthenticatedUser();
  await Auth.updateUserAttributes(user, {
    given_name,
    name,
    phone_number,
    birthdate,
    gender,
    address,
  });
};
export const getUserAttributes = async () => {
  const user = await Auth.currentAuthenticatedUser();
  return user.attributes;
};

export const checkAdmin = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const groups = user.signInUserSession.accessToken.payload["cognito:groups"];
    if (groups) {
      return groups.includes("Admin");
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// classes

export const getClasses = async () => {
  const response = await api.get("classes");
  return response.data;
};

export const getClassById = async (classId) => {
  const response = await api.get("classes");
  if (response.data.body.length > 0) {
    const foundClass = response.data.body.filter(
      (item) => item.classesId === classId
    );
    return foundClass[0];
  } else {
    return null;
  }
};

export const createClass = async (data) => {
  const response = await api.post("classes", data);
  return response;
};

export const deleteClass = async (data) => {
  const response = await api.delete("classes", { data });
  return response;
};

export const joinClass = async (eventId, userId) => {
  const event = await getClassById(eventId);
  const isEnrolled = event.confirmed.includes(userId);
  if (
    window.confirm(
      `Confirma a ${
        isEnrolled ? "saída dessa" : "presença nessa"
      } aula de ${event.type.toLowerCase()} que começa às ${event.hour}:${
        event.minutes
      }`
    )
  ) {
    if (!isEnrolled) {
      let updatedClass = event;
      updatedClass.confirmed = [...updatedClass.confirmed, userId];
      updatedClass.spots = (parseInt(updatedClass.spots) - 1).toString();
      await createClass(updatedClass);
    } else {
      let updatedClass = event;
      updatedClass.confirmed = updatedClass.confirmed.filter(
        (item) => item !== userId
      );
      updatedClass.spots = (parseInt(updatedClass.spots) + 1).toString();

      await createClass(updatedClass);
    }
  }
};

// profile pictures

const getProfilePictureKey = async (userId) => {
  const images = await Storage.list("");
  const profilePictureKeyArray = images.filter((item) =>
    item.key.includes(userId)
  );
  const profilePictureKey =
    profilePictureKeyArray.length > 0 ? profilePictureKeyArray[0].key : null;
  return profilePictureKey;
};

export const getProfilePicture = async (userId) => {
  const key = await getProfilePictureKey(userId);
  const resizedURL = "https://ik.imagekit.io/fzwpyzjcl9f/";

  if (key) {
    return resizedURL + key;
  }
  return "https://ik.imagekit.io/fzwpyzjcl9f/profile-picture.png";
};

export const uploadProfilePicture = async (userId, file) => {
  const key = await getProfilePictureKey(userId);
  if (key) {
    await Storage.remove(key);
  }

  const newKey = `${userId}-${new Date().getTime()}`;

  const response = await Storage.put(newKey + ".png", file, {
    contentType: "image/png",
    level: "public",
    progressCallback: (progress) => {
      console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
    },
  });
  return response;
};

// Timeline database structure:

export const getPosts = async () => {
  const response = await api.get("posts");
  return response.data;
};

export const createPost = async (data) => {
  const response = await api.post("posts", data);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await api.delete(`posts/${id}`);
  return response.data;
};
