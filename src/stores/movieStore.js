import { defineStore } from 'pinia';
// import axios from 'axios';

export default defineStore('movieStore', {
  state: () => ({
    movies: []
  }),
  actions: {
    getMovies() {}
  }
});
