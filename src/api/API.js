import axios from "axios";
import { Storage } from "aws-amplify";

const api = axios.create({
  baseURL: "https://v2ph0dafi3.execute-api.sa-east-1.amazonaws.com/dev/eae/",
});

// classes

export const getClasses = async () => {
  const response = await api.get("classes");
  return response.data;
};

export const createClass = async (data) => {
  const response = await api.post("classes", data);
  return response;
};

export const deleteClass = async (data) => {
  const response = await api.delete("classes", { data });
  return response;
};

export const updateClass = async (id, data) => {
  const response = await api.put(`classes/${id}`, data);
  return response.data;
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
  return "https://ik.imagekit.io/fzwpyzjcl9f/default-profile-picture.png";
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
  console.log(response);
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
