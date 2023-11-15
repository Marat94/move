import './navbar.css'

const navbarItem = [
  {
    id: 1,
    icon: "/assets/icons/search.png",
    name: "Search"
  },
  {
    id: 2,
    icon: "/assets/icons/home.png",
    name: "Home"
  },
  {
    id: 3,
    icon: "/assets/icons/tv_show.png",
    name: "TV Shows"
  },
  {
    id: 4,
    icon: "/assets/icons/video.png",
    name: "Movies"
  },
  {
    id: 5,
    icon: "/assets/icons/genres.png",
    name: "Genres"
  },
  {
    id: 6,
    icon: "/assets/icons/watch_later.png",
    name: "Watch Later"
  },
]
const Navbar = ({showNavbar, setShowNavbar}) => {


  const _onHandleOpenNavbar = () => {
    setShowNavbar(true)
  }

  return (
    <div id='navigation'>
      <div className="navigation_sidenav">
        <div className={`ns_container ${showNavbar ? 'open' : 'close'} `}>
          {navbarItem.map(item => (
            <div className={`navbar_item ${showNavbar ? 'show' : 'hide'}`} onClick={_onHandleOpenNavbar} key={item.id}>
              <img src={item.icon} alt="Search" />
              <span className='navbar_item_title'>{item.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
