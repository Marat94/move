import React from 'react';
import {Route,Routes, BrowserRouter} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Movies from "./pages/movies/Movies";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/popular"} element={<MainPage />}/>
          <Route path={"/movies"}  element={<Movies />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;