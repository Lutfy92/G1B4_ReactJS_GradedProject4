// import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import {Routes,Route} from 'react-router-dom'
import MoviesinTheaters from './components/MoviesInTheaters/MoviesinTheaters';
import Comingsoon from './components/Coming Soon/Comingsoon';
import TopRatedIndian from './components/TopRatedIndian/TopRatedIndian';
import TopRatedMovies from './components/TopRatedMovies/TopRatedMovies';
import Favourites from './components/Favoutites/Favourites';
import MovieDetails from './components/MovieDetails/MovieDetails';
import './App.css'

function App() {
  return (
    <div className="App">
        <NavigationBar />
      <h3 className='mx-4 my-3'>Movie</h3>
      <div className=' my-3'>
        <Routes>
          <Route path="/" element={<MoviesinTheaters/>}/>
          <Route path="/coming" element={<Comingsoon/>}/>
          <Route path="/topindian" element={<TopRatedIndian/>}/>
          <Route path="/toprated" element={<TopRatedMovies/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
          <Route path="/:id" element={<MovieDetails/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;


