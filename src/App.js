import React from 'react';
import { Route,Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Movies from "./pages/movies/Movies";
import TvSeries from "./pages/tvSeries/TvSeries";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/popular"} element={<MainPage />} />
          <Route path={"/movies"}  element={<Movies />} />
          <Route path={"/tvSeries"} element={<TvSeries />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;