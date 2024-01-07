import React, {useRef} from "react";
import Navbar from "../navbar/Navbar"
import Wrapper from "../wrapper/Wrapper";
import BrowseMovieCarousel from "./browseMovie/BrowseMovieCarousel";
import Featured from "./featured/Featured";
import TopPicks from "./watch/topPicks/TopPicks";
import Top from "./watch/top/Top";
import Favorites from "./watch/favorites/Favorites";
import "./home.css"

const Home = () => {

  const ref = useRef(null)

  return (
    <Wrapper>
      <Navbar ref={ref}/>
      <div
        id="homepage"
        onClick={() => {
          ref.current.onHandleCloseNavbar()
        }}
      >
        <div className="homepage-about-movies">
          <BrowseMovieCarousel/>
        </div>
        <Featured/>
        <TopPicks/>
        <Top/>
        <Favorites />
      </div>

    </Wrapper>
  )
}

export default Home