import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-challenge-4b2b2.cloudfunctions.net/api",
  // baseURL: "http://localhost:5001/clone-b8e43/us-central1/api",
  // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;
