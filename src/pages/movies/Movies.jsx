import React, { useEffect, useRef, useState } from "react";
import jsonData from "../../data.json";
import {Modal} from 'react-bootstrap';
import Navbar from "../navbar/Navbar";
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
    <div id="movies">
      <Navbar ref={ref}/>
      <div
        className="movies"
        onClick={() => {
          ref.current.onHandleCloseNavbar()
        }}
      >,,
        <div className="movies-containers">
          {data.map((item) => (
            item.id <= 3 && (
              <div className="movies-container" key={item.id}>
                <img
                  className="movies-cover-img"
                  src={item.cover}
                  alt={item.title}
                  onClick={() => onHandleShowModal(item)}
                />
                <span className="movies-title">{item.title}</span>
              </div>
            )
          ))}
        </div>
        <div className="movies-containers">
          {data.map((item) => (
            item.id > 3 && item.id <= 6 && (
              <div className="movies-container" key={item.id}>
                <img
                  className="movies-cover-img"
                  src={item.cover}
                  alt={item.title}                 onClick={() => onHandleShowModal(item)}
                />
                <span className="movies-title">{item.title}</span>
              </div>
            )
          ))}
        </div>
        <div className="movies-containers">
          {data.map((item) => (
            item.id > 6 && item.id <= 9 && (
              <div className="movies-container" key={item.id}>
                <img
                  className="movies-cover-img"
                  src={item.cover}
                  alt={item.title}
                  onClick={() => onHandleShowModal(item)}
                />
                <span className="movies-title">{item.title}</span>
              </div>
            )
          ))}
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        selecteditem={selectedItem}
      />
    </div>

  );
};

export function MyVerticallyCenteredModal(props) {

  const {
    title,
    cover,
    description,
    mpaRating,
    video,
    titleImage,
    releaseYear,
    duration,
    director,
    actors
  } = props.selecteditem

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-header" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <img className="modal-title-img" src={titleImage} alt={title}/>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <div className="modal-body-container">
          <div>
            <p className="modal-movie-info">{releaseYear} • {mpaRating} • {duration} </p>
            <img className="modal-cover-img" src={cover} alt={title}/>
          </div>
          <iframe className="modal-video" src={video} controls/>
        </div>
        <div className="modal-description">{description}</div>
        <div className="modal-description">
          <span>Director:</span>
          <a className="movie-director" href={director && director.link} target="_blank">{director && director.name}</a>
        </div>
        <div className="modal-description">
          <span className="movie-cast">Cast:</span>
          {actors && actors.map((v, index) => (
            <a className="movie-actors" key={index} href={v.link} target="_blank">{v.name}</a>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Movies;
