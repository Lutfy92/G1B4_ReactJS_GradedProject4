import axios from 'axios'
import IMovie from '../models/IMovie';
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const getMoviesinTheaters = async()=>{
   const response = await axios.get(`${apiBaseUrl}/movies-in-theaters`);
  return response.data as IMovie[];
};

const getFavourites = async()=>{
  const response = await axios.get(`${apiBaseUrl}/favourite`);
 return response.data as IMovie[];
};

const getComingSoon = async()=>{
  const response = await axios.get(`${apiBaseUrl}/movies-coming`);
 return response.data as IMovie[];
};
const getRatedIndia = async()=>{
  const response = await axios.get(`${apiBaseUrl}/top-rated-india`);
 return response.data as IMovie[];
};
const getRatedMovies = async()=>{
  const response = await axios.get(`${apiBaseUrl}/top-rated-movies`);
 return response.data as IMovie[];
};
const getMovieDetails = async()=>{
  const response = await axios.get(`${apiBaseUrl}/:id`);
 return response.data as IMovie[];
};

export {
    getMoviesinTheaters,
    getFavourites,
    getComingSoon,
    getRatedIndia,
    getRatedMovies,
    getMovieDetails 
}