import React, {useEffect, useState} from 'react';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import jsonData from '../../data.json';
import Navbar from "../navbar/Navbar";
import './mainPage.css'

const MainPage = () => {

  const [showNavbar, setShowNavbar] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(
    sessionStorage.getItem('movieId')
      ? jsonData.trendingNow.filter(v => +v.id === +sessionStorage.getItem('movieId'))[0]
      : jsonData.featured
  );


  useEffect(() => {
    setTimeout(() => {
      !!sessionStorage.getItem('movieId') && setActiveVideo(jsonData.trendingNow.filter(v => +v.id === +sessionStorage.getItem('movieId'))[0].video)
    }, 3000)
  }, []);

  const _onHandleCloseNavbar = () => {
    setShowNavbar(false)
  }
  const formatTimeFromSeconds = (totalSeconds) => {
    const totalMinutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return hours + "h " + minutes + "m";
  };

  const sortedTrendingNow = [...jsonData.trendingNow].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  });

  const _onHandleAddSessionStorage = (id) => {
    sessionStorage.setItem('movieId', id);
  };

  const _onHandleChangeMovie = (movie) => {
    _onHandleAddSessionStorage(movie.id)
    setSelectedMovie(movie)
    setActiveVideo('')
    setTimeout(() => {
      setActiveVideo(movie.video)
    }, 3000)
  };


  return (
    <div id='main'>
      <Navbar
        showNavbar={showNavbar}
        setShowNavbar={setShowNavbar}
      />

      <div id='main_page' onClick={_onHandleCloseNavbar}>
        <div className="main_page_container">
          {!activeVideo && (
            <img className='mpc_photo' src={selectedMovie.backgroundImg} alt="Icon"/>
          )}
          {!!activeVideo && (
              <iframe
                className='mpc_photo'
                width="640"
                height="360"
                src={activeVideo}
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onClick={_onHandleCloseNavbar}
              />
          )}

        </div>
        <div className="main_page_film_description">
          <span className='category'>{selectedMovie.Category}</span>
          <img src={selectedMovie.titleImage} alt="title"/>
          <span className='info'>
            {selectedMovie.releaseYear} {selectedMovie.mpaRating} {formatTimeFromSeconds(selectedMovie.duration)}
          </span>
          <span className='description'>{selectedMovie.description}</span>
          <div className="video_buttons">
            <button className='play_video'>
              <img src="/assets/icons/play-button.png" alt="Play"/>
              Play
            </button>
            <button className='more_info'>
              More Info
            </button>
          </div>
        </div>
        <div className="movies_carousel">
          <ScrollingCarousel>
            {sortedTrendingNow.map(movie => (
              <img
                src={movie.cover}
                alt="Films"
                onClick={() => _onHandleChangeMovie(movie)}
                key={movie.id}
              />
            ))}
          </ScrollingCarousel>
        </div>

      </div>
    </div>

  );
};

export default MainPage;
