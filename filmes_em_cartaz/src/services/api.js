import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTAzZGY3ODZlZTNmMWM0ODA1NTJhMGQwMjRjNzQyZiIsIm5iZiI6MTc0NTY0NDQzMC42NTYsInN1YiI6IjY4MGM2YjhlODA3N2QyNTgwMTM3NzU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pKI-6mffyf8zf829YuDiADOFonGbrlQq7BknMsikGB4'
  }
});

export const getMovies = () => api.get('/movie/now_playing');
export const getMovieDetails = (id) => api.get(`/movie/${id}`);
export const searchMovies = (query) => api.get(`/search/movie?query=${query}`);
