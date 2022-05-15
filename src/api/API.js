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

/* const tableOfClasses = [
        { day: "Domingo", events: [] },

        { day: "Segunda", events: [] },

        {
            day: "Terça",
            events: [
                { title: "Altinha", starts: "07:00", ends: "08:00", availableSpots: "7" },
                { title: "Altinha", starts: "08:00", ends: "09:00", availableSpots: "2" },
                { title: "Altinha", starts: "18:00", ends: "19:00", availableSpots: "1" },
                { title: "Altinha", starts: "18:00", ends: "19:00", availableSpots: "1" },
                { title: "Altinha", starts: "18:00", ends: "19:00", availableSpots: "1" },
                { title: "Altinha", starts: "18:00", ends: "19:00", availableSpots: "1" },
            ],
        },

        {
            day: "Quarta",
            events: [{
                    title: "Altinha",
                    starts: "09:30",
                    ends: "10:30",
                    availableSpots: "10",
                },
                { title: "Altinha", starts: "17:00", ends: "18:00", availableSpots: "1" },
            ],
        },

        {
            day: "Quinta",
            events: [
                { title: "Altinha", starts: "07:00", ends: "08:00", availableSpots: "8" },
                { title: "Altinha", starts: "08:00", ends: "09:00", availableSpots: "4" },
                { title: "Altinha", starts: "18:00", ends: "19:00", availableSpots: "9" },
            ],
        },

        {
            day: "Sexta",
            events: [
                { title: "Altinha", starts: "09:30", ends: "10:30", availableSpots: "2" },
                {
                    title: "Altinha",
                    starts: "17:00",
                    ends: "18:00",
                    availableSpots: "11",
                },
            ],
        },

        {
            day: "Sábado",
            events: [
                { title: "Altinha", starts: "08:30", ends: "09:30", availableSpots: "5" },
                { title: "Altinha", starts: "09:30", ends: "10:30", availableSpots: "7" },
            ],
        },
    ];
*/
