import {Link} from "react-router-dom";
import {forwardRef, useImperativeHandle, useState, useEffect} from "react";
import jsonData from "../../data.json"
import './navbar.css'


const Navbar = forwardRef((props, ref) => {

  const [item, setItem] =  useState([]);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setItem(jsonData.navbarItem.map(data => data))
  }, []);

  useImperativeHandle(ref, () => ({
    onHandleCloseNavbar() {
      setShowNavbar(false)
    }
  }))


  const onHandleOpenNavbar = () => {
    setShowNavbar(true)
  }

  return (
    <div id='menu'>
      <div className="menu_sidenav">
        <div className={`ns_container ${showNavbar ? 'open' : 'close'} `}>
          {item.map(item => (
            <div className={`menu_item ${showNavbar ? 'show' : 'hide'}`} key={item.id} onClick={onHandleOpenNavbar}>
              <Link to={item.link}><img src={item.icon} alt="item"/></Link>
              <Link to={item.link} className='menu_item_title'>{item.name} </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
})

export default Navbar;
