import React, {useEffect, useRef, useState} from "react";
import jsonData from "../../data.json";
import Navbar from "../navbar/Navbar";
import Wrapper from "../wrapper/Wrapper";
import MyVerticallyCenteredModal from "../modal/MyVerticallyCenteredModal";
import "./movies.css";


const Movies = () => {
  const ref = useRef(null)
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});


  const onHandleShowModal = (item) => {
    setSelectedItem({...item});
    setModalShow(true);
    ref.current.onHandleCloseNavbar()
  }

  useEffect(() => {
    setData(jsonData.trendingNow.map((item) => item));
  }, []);


  return (
    <Wrapper>
      <div id="movies">
        <Navbar ref={ref}/>
        <div
          className="movies-section"
          onClick={() => {ref.current.onHandleCloseNavbar()}}
        >
          <div className="movies-containers">
            { data
              .filter(item => item.Category === "Movie")
              .map(item => (
              <div className="movies-item" key={item.id}>
                <img
                  className="movies-cover-img"
                  src={item.image}
                  alt={item.title}
                  onClick={() => onHandleShowModal(item)}
                />
                <span className="movies-title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          selecteditem={selectedItem}
        />
      </div>

    </Wrapper>
  );
};

export default Movies;
