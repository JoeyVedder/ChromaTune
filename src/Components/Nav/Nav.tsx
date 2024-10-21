import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

// Nav component
function Nav() {
  const location = useLocation();
  const currentPage = location.pathname;

  // Return the Nav component
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className={currentPage === "/" ? "activeLink" : "link"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/New" className={currentPage === "/New" ? "activeLink" : "link"}>
            New
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/History" className={currentPage === "/History" ? "activeLink" : "link"}>
            History
          </Link>
        </li>
        <li className="nav-item">
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