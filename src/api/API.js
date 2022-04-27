import axios from "axios";

const api = axios.create({
  baseURL: "https://v2ph0dafi3.execute-api.sa-east-1.amazonaws.com/dev/eae/",
});

export const getClasses = async () => {
  const response = await api.get("classes");
  return response.data;
};

export const createClass = async (data) => {
  const response = await api.post("classes", data);
  return response.data;
};

export const deleteClass = async (id) => {
  const response = await api.delete(`classes/${id}`);
  return response.data;
};

export const updateClass = async (id, data) => {
  const response = await api.put(`classes/${id}`, data);
  return response.data;
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
