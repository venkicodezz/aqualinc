
import { Outlet, Link } from "react-router-dom";
import './layout.css';
const Layout = () => {
  
  return (
    <>
      <nav>
        <div className="logo">
          <h1>Aqualinc</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Our Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="hambruger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;