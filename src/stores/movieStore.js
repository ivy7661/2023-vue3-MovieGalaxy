import { defineStore } from 'pinia';
import axios from 'axios';
const { VITE_API_URL } = import.meta.env;

export default defineStore('movieStore', {
  state: () => ({
    movies: []
  }),
  actions: {
    getMovies() {
      axios
        .get(`${VITE_API_URL}/movieDatas`)
        .then((res) => {
          this.movies = res.data;
          console.log(this.movies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
});
