import React from "react";
import {Modal} from "react-bootstrap";

function MyVerticallyCenteredModal(props) {

  const {
    title,
    image,
    description,
    rating,
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
            <p className="modal-movie-info">{releaseYear} • {rating} • {duration} </p>
            <img className="modal-cover-img" src={image} alt={title}/>
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

export default MyVerticallyCenteredModal