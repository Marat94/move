import React, {useEffect, useState} from "react";
import {ScrollingCarousel} from "@trendyol-js/react-carousel";
import jsonData from "../../../../data.json"
import "./top.css"

const Top = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    setData(jsonData.trendingNow.map(item => item))
  }, []);

  return (
    <div id="top">
      <div className="top-items">
        <div>
          <div className="top-title">
            <span>Top 10 on IMDb this week</span>
            <img src="/assets/icons/arrow.svg" alt="arrow"/>
          </div>
          <div className="top-movies">
            <ScrollingCarousel>
              {data.map(item => (
                <div className="top-movies-items" key={item.id}>
                    <div className="top-items-background">
                      <img className="top-img" src={item.image} alt="image"/>
                    </div>
                    <div className="top-rating">
                      <img className="top-rate-star-filled" src="/assets/icons/fill-star.svg" alt="star"/>
                      <span className="top-movie-rate">6.6</span>
                      <img className="top-rate-star" src="/assets/icons/rate-start.svg" alt="rate-start"/>
                    </div>
                    <div className="top-movie-title">{item.title}</div>
                    <div className="top-add-watchlist">
                      <button className="top-add-watchlist-button">
                        <img src="/assets/icons/plus.svg"/>
                        Watchlist
                      </button>
                    </div>
                    <div className="top-movie-info">
                      <button className="top-movie-button">
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

export default Top