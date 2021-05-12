import axios from 'axios';

export default axios.create({
  baseURL: 'https://grammarway-api.herokuapp.com/api',
  headers: {
    'Content-type': 'application/json'
  }
});
