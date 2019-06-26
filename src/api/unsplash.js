import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6b12ec6fdefb2e1bc1a27c723bd4db7739aa4a8db15148230eaef3198a2ad49d"
  }
});
