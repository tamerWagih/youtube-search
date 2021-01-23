import axios from 'axios';

const KEY = 'AIzaSyDJ6ETthykh3r-pin9qHvsuklizINr51nY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: KEY,
  },
});
