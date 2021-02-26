import axios from 'axios';

// Get variables from .env
const API_KEY = process.env.TMDB_SECRET_API_KEY;
const API_BASE = process.env.TMDB_BASE_URL;

// Axios configuration
const api = axios.create({
  baseURL: API_BASE,
});

/*
    -originais da netflix
    -trendig
    -top rated
    -action
    -comedy
    -horror
    -romace
    -documentary
*/

// Request default
const baseRequest = async (endpoint: string, language = 'pt-BR') => {
  const request = await api(`${endpoint}language=${language}&api_key=${API_KEY}`);
  return request;
};

export default {
  getHomeList: async () => [
    {
      slug: 'originals',
      title: 'Originais da Netflix',
      type: 'tv',
      items: await baseRequest('/discover/tv?whith_networks=213&'),
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      type: 'movie',
      items: await baseRequest('/trending/all/week?'),
    },
    {
      slug: 'top_rated',
      title: 'Em Alta',
      type: 'movie',
      items: await baseRequest('/movie/top_rated?'),
    },
    {
      slug: 'action',
      title: 'Ação',
      type: 'movie',
      items: await baseRequest('/discover/movie?with_genres=28&'),
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      type: 'movie',
      items: await baseRequest('/discover/movie?with_genres=35&'),
    },
    {
      slug: 'horror',
      title: 'Terror',
      type: 'movie',
      items: await baseRequest('/discover/movie?with_genres=27&'),
    },
    {
      slug: 'romance',
      title: 'Romance',
      type: 'movie',
      items: await baseRequest('/discover/movie?with_genres=10749&'),
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      type: 'movie',
      items: await baseRequest('/discover/movie?with_genres=99&'),
    },
  ],
  getMovieInfo: async (movieID: string, type: string) => {
    let info = {};
    if (movieID && type) {
      info = await baseRequest(`/${type}/${movieID}?`);
    }
    return info;
  },
  getMovieDialog: async (movieID: string) => [
    {
      slug: 'movie_details',
      items: await baseRequest(`/movie/${movieID}?`),
    },
    {
      slug: 'movie_credits',
      items: await baseRequest(`/movie/${movieID}/credits?`),
    },
    {
      slug: 'movie_similar',
      items: await baseRequest(`/movie/${movieID}/similar?`),
    },
  ],
  getTvDialog: async (tvID: string) => [
    {
      slug: 'TV_details',
      items: await baseRequest(`/tv/${tvID}?`),
    },
    {
      slug: 'TV_credits',
      items: await baseRequest(`/tv/${tvID}/credits?`),
    },
    {
      slug: 'TV_seasons',
      items: await baseRequest(`/tv/${tvID}/season/1?`),
    },
    {
      slug: 'TV_similar',
      items: await baseRequest(`/tv/${tvID}/similar?`),
    },
  ],
  getTvVideos: async (TvID: string) => ({
    slug: 'TV_trailer',
    items: await baseRequest(`/tv/${TvID}/videos?`, 'en-US'),
  }),
  getMovieVideos: async (movieID: string) => ({
    slug: 'movie_trailer',
    items: await baseRequest(`/movie/${movieID}/videos?`, 'en-US'),
  }),

};
