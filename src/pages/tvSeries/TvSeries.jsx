import React, {useEffect, useRef, useState} from "react";
import Wrapper from "../wrapper/Wrapper";
import jsonData from "../../data.json"
import Navbar from "../navbar/Navbar";
import "./tvSeries.css"
import MyVerticallyCenteredModal from "../modal/MyVerticallyCenteredModal";

const TvSeries = () => {

  const ref = useRef(null)
  const [data, setData] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [modalShow, setModalShow] = useState(false)

  useEffect(() => {
    setData(jsonData.trendingNow.map(item => item))
  }, []);


  const onHandleShowModal = (item) => {
    setModalShow(true)
    setSelectedItem({...item})
    ref.current.onHandleCloseNavbar()
  }

  return (
    <Wrapper>
      <div id="tv-series">
        <Navbar ref={ref}/>
        <div
          className="tv-series-section"
          onClick={() => {ref.current.onHandleCloseNavbar()}}
        >
          <div className="tv-series-containers">
            {data
              .filter(item => item.Category === "TV Series")
              .map(item => (
                <div className="tv-series-item" key={item.id}>
                  <img
                    className="tv-series-img"
                    src={item.image}
                    alt={item.title}
                    onClick={() => onHandleShowModal(item)}
                  />
                  <span className="tv-series-title">{item.title}</span>
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
  )
}

export default TvSeries