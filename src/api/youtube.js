import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  part: 'snippet',
  maxResults: 5,
  key: 'AIzaSyDiv9d6P0UZ2qgfSS0Rnd0iGgGT___0eTg',
});
