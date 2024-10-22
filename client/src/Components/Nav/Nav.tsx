import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

// Nav component
function Nav() {
  const location = useLocation();
  const currentPage = location.pathname;

  // Return the Nav component
  return (
    <nav className="navContainer">
      <div className="navRecord"></div>
      <div className="navRecordLine1"></div>
      <div className="navRecordLine2"></div>
      <div className="navRecordLine3"></div>
      <ul className="navList">
        <li className="navItemDefault">
          <Link to="/" className={currentPage === "/" ? "activeLink" : "link"}>
            Home
          </Link>
        </li>
        <li className="navItemNew">
          <Link to="/New" className={currentPage === "/New" ? "activeLink" : "link"}>
            New
          </Link>
        </li>
        <li className="navItemHistory">
          <Link to="/History" className={currentPage === "/History" ? "activeLink" : "link"}>
            History
          </Link>
        </li>
        <li className="navItemSettings">
          <Link to="/Settings" className={currentPage === "/Settings" ? "activeLink" : "link"}>
            Settings
          </Link>
        </li>
        </ul>
    </nav>
    );
}

// Export the Nav component
export default Nav;