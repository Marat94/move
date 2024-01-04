import React, {useRef} from "react";
import Navbar from "../navbar/Navbar"
import Wrapper from "../wrapper/Wrapper";
import BrowseMovieCarousel from "./BrowseMovieCarousel";
import Featured from "./featured/Featured";
import TopPicks from "./watch/topPicks/TopPicks";
import Top from "./watch/top/Top";
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
      </div>

    </Wrapper>
  )
}

export default Home