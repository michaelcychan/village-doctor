import axios from 'axios';

export default axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json;charset=UTF-8"
  }
});
