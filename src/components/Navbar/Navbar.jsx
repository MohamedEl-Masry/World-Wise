import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import togglerIcon from "../../assets/bars-solid.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar nav navbar-expand-lg  position-absolute top-0 start-0 end-0">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <img src={togglerIcon} alt="togglerIcon" />
            </span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex align-items-end">
              <li className="nav-item me-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link ctaLink py-2 px-4 rounded-2"
                  to="/login"
                >
                  <div className="btn-login">Login</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
