import React from 'react';
import { Route,Routes, BrowserRouter } from "react-router-dom";
import Popular from "./pages/popular/Popular";
import Movies from "./pages/movies/Movies";
import TvSeries from "./pages/tvSeries/TvSeries";
import Home from "./pages/home/Home";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/popular"} element={<Popular />} />
          <Route path={"/movies"}  element={<Movies />} />
          <Route path={"/tvSeries"} element={<TvSeries />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;