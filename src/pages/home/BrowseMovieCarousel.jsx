import React from 'react';
import {Carousel} from 'react-bootstrap';
import "./browseMovieCarousel.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const BrowseMovieCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block browse-movie-img"
          src="/assets/ford-vs-ferrari.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ford v Ferrari</h3>
          <p>American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block browse-movie-img"
          src="/assets/spider-man.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Spider-Man: No Way To Home</h3>
          <p>With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block browse-movie-img"
          src="/assets/the-marvels.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>The Marvels</h3>
          <p>Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together to save the universe.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BrowseMovieCarousel;
