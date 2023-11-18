import React, {useEffect, useState} from 'react';
import {ScrollingCarousel} from '@trendyol-js/react-carousel';
import jsonData from '../../data.json';
import Navbar from "../navbar/Navbar";
import './mainPage.css'

const MainPage = () => {

  const [showNavbar, setShowNavbar] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(
    sessionStorage.getItem('moveiId')
      ? jsonData.tendingNow.filter(v => +v.id === +sessionStorage.getItem('moveiId'))[0]
      : jsonData.featured
  );


  useEffect(() => {
    setTimeout(() => {
      !!sessionStorage.getItem('movieId') && setActiveVideo(jsonData.tendingNow.filter(v => +v.id === +sessionStorage.getItem('movieId'))[0].VideoUrl)
    }, 2000)
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

  const sortedTrendingNow = [...jsonData.tendingNow].sort((a, b) => {
    const dateA = new Date(a.Date);
    const dateB = new Date(b.Date);

    return dateA - dateB;
  });

  const _onHandleAddSessionStorage = (id) => {
    sessionStorage.setItem('moveId', id);
  };

  const _onHandleChangeMovie = (movie) => {
    _onHandleAddSessionStorage(movie.id)
    setSelectedMovie(movie)
    setActiveVideo('')
    setTimeout(() => {
      setActiveVideo(movie.VideoUrl)
    }, 2000)
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
            <img className='mpc_photo' src={`/assets/${selectedMovie.CoverImage}`} alt="Icon"/>
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
            />
          )}

        </div>
        <div className="main_page_film_description">
          <span className='category'>{selectedMovie.Category}</span>
          <span className='title'>{selectedMovie.Title}</span>
          <span
            className='info'>{selectedMovie.ReleaseYear} {selectedMovie.MpaRating} {formatTimeFromSeconds(selectedMovie.Duration)}</span>
          <span className='description'>{selectedMovie.Description}</span>
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
        <div className="films_carusel">
          <ScrollingCarousel>
            {sortedTrendingNow.map(movie => (
              <img
                src={`/assets/${movie.CoverImage}`}
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
