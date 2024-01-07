import React, {useEffect, useState} from "react";
import {ScrollingCarousel} from "@trendyol-js/react-carousel";
import jsonData from "../../../../data.json"
import "./favorites.css"

const Favorites = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    setData(jsonData.trendingNow.map(item => item))
  }, []);

  return (
    <div id="favorites">
      <div className="favorites-items">
        <div>
          <div className="favorites-title">
            <span>Fan Favorites</span>
            <img src="/assets/icons/arrow.svg" alt="arrow"/>
          </div>
          <div className="favorites-movies">
            <ScrollingCarousel>
              {data.map(item => (
                <div className="favorites-movies-items" key={item.id}>
                  <div className="favorites-items-background">
                    <img className="favorites-img" src={item.image} alt="image"/>
                  </div>
                  <div className="favorites-rating">
                    <img className="favorites-rate-star-filled" src="/assets/icons/fill-star.svg" alt="star"/>
                    <span className="favorites-movie-rate">6.6</span>
                    <img className="favorites-rate-star" src="/assets/icons/rate-start.svg" alt="rate-start"/>
                  </div>
                  <div className="favorites-movie-title">{item.title}</div>
                  <div className="favorites-add-watchlist">
                    <button className="favorites-add-watchlist-button">
                      <img src="/assets/icons/plus.svg"/>
                      Watchlist
                    </button>
                  </div>
                  <div className="favorites-movie-info">
                    <button className="favorites-movie-button">
                      <img src="/assets/icons/play-white-fill.svg" alt="play"/>
                      Trailer
                    </button>
                    <img src="/assets/icons/info.svg" alt="info"/>
                  </div>
                </div>
              ))}
            </ScrollingCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favorites;