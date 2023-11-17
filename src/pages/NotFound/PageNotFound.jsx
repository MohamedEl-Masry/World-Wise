import "./PageNotFound.css";
import error from "../../assets/error.svg";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <>
      <div className="bg-secondary vh-100">
        <div className="container pt-4">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="nav position-relative ">
                <Navbar />
              </div>
              <div className="">
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <div className="text-center pt-5 my-5">
                    <img
                      src={error}
                      alt="error 404"
                      className="img-error my-1 pt-1"
                    />
                  </div>
                  <div className="">
                    <Link to={"/"} className="btn btn-success p-4 rounded-2">
                      go to Home page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
