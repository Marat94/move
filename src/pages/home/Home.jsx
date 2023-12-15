import React, {useRef} from "react";
import Navbar from "../navbar/Navbar"
import Wrapper from "../wrapper/Wrapper";
import "./home.css"
import BrowseMovieCarousel from "./BrowseMovieCarousel";

const Home = () => {

  const ref = useRef(null)

  return (
    <Wrapper>
      <Navbar ref={ref}/>
      <div
        id="homepage"
        onClick={() => {ref.current.onHandleCloseNavbar()}}
      >
        <div className="homepage-about-movies">
          <div className="movies-carousel">
            <BrowseMovieCarousel />
          </div>
          <div className="homepage-browse-movies">

          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Home