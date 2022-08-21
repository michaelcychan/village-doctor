import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5050',
  headers: {
    Accept: 'application/json',
    "Content-type": "application/json"
  }
});
