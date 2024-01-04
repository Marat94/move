import React, {useEffect, useState} from "react";
import {ScrollingCarousel} from "@trendyol-js/react-carousel";
import jsonData from "../../../../data.json"
import "./topPicks.css"

const TopPicks = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    setData(jsonData.trendingNow.map(item => item))
  }, []);

  return (
    <div id="watch">
      <div className="watch-items">
        <div>
          <h1 className="watch-headline">What to watch</h1>
          <div className="top-picks-title">
            <span>Top Picks</span>
            <img src="/assets/icons/arrow.svg" alt="arrow"/>
          </div>
          <div className="top-picks">
            <ScrollingCarousel>
              {data.map(item => (
                <div className="top-picks-items" key={item.id}>
                  <div className="top-picks-items-background">
                    <img className="top-picks-img" src={item.image} alt="image"/>
                  </div>
                  <div className="top-picks-rating">
                    <img className="rate-star-filled" src="/assets/icons/fill-star.svg" alt="star"/>
                    <span className="movie-rate">6.6</span>
                    <img className="rate-star" src="/assets/icons/rate-start.svg" alt="rate-start"/>
                  </div>
                  <div className="top-picks-movie-title">{item.title}</div>
                  <div className="top-picks-add-watchlist">
                    <button className="add-watchlist-button">
                      <img src="/assets/icons/plus.svg"/>
                      Watchlist
                    </button>
                  </div>
                  <div className="top-picks-movie-info">
                    <button className="top-picks-movie-button">
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
      <div>

      </div>
    </div>
  )
}

export default TopPicks