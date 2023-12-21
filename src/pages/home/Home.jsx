import React, {useRef} from "react";
import Navbar from "../navbar/Navbar"
import Wrapper from "../wrapper/Wrapper";
import BrowseMovieCarousel from "./BrowseMovieCarousel";
import Featured from "./featured/Featured";
import "./home.css"
import Watch from "./watch/Watch";

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
        <Watch/>
      </div>

    </Wrapper>
  )
}

export default Home