import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID FGNBmo76Fhp6MkfSAfJd7UVUFFQqRjOc3lwPZG8Kpz4",
  },
});
