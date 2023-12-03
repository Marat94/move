import React, {useEffect, useRef, useState} from "react";
import Wrapper from "../wrapper/Wrapper";
import jsonData from "../../data.json"
import Navbar from "../navbar/Navbar";
import "./tvSeries.css"

const TvSeries = () => {

  const ref = useRef(null)
  const [data, setData] = useState([])

  useEffect(() => {
    setData(jsonData.trendingNow.map(item => item))
  }, []);

  return (
    <Wrapper>
      <div id="tv-series">
        <Navbar ref={ref}/>
        <div
          className="tv-series-section"
          onClick={() => {ref.current.onHandleCloseNavbar()}}
        >
          <div className="tv-series-containers">
            {data
              .filter(item => item.Category === "TV Series")
              .map(item => (
                <div className="tv-series-item" key={item.id}>
                  <img
                    className="tv-series-img"
                    src={item.cover}
                    alt={item.title}
                  />
                  <span className="tv-series-title">{item.title}</span>
                </div>
              ))}
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

export default TvSeries