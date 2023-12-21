import React, {useEffect, useState} from "react";
import {ScrollingCarousel} from '@trendyol-js/react-carousel';
import jsonData from "../../../data.json";
import "./featured.css"

const Featured = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(jsonData.trendingNow.map(item => item))
  }, []);

  return (
    <div id="featured">
      <div className="featured-items">
        <h1 className="featured-headline">Featured today</h1>
        <div className="featured-movies-carousel">
          <ScrollingCarousel>
            {data.map(item => (
              <img
                className="featured-img"
                src={item.image}
                alt="image"
                key={item.id}
              />
            ))}
          </ScrollingCarousel>
        </div>
      </div>
    </div>
  )
}

export default Featured