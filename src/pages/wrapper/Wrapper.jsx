import React from "react";
import Header from "../header/Header";


const Wrapper = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Wrapper