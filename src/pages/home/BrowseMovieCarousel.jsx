import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BrowseMovieCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/avengers-endgame.png"
          alt="First slide"
          style={{height: "550px"}}
        />
        <Carousel.Caption>
          <h3>Avengers: Endgame</h3>
          <p>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/spider-man.png"
          alt="Second slide"
          style={{height: "550px"}}
        />

        <Carousel.Caption>
          <h3>Spider-Man: No Way To Home</h3>
          <p>With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/the-marvels.png"
          alt="Third slide"
          style={{height: "550px"}}
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
