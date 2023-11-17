import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Homepage.module.css";

const Home = () => {
  return (
    <>
      <main className={styles.homepage}>
        <div className="nav position-relative ">
          <Navbar />
        </div>
        <section className="container-fluid mt-5">
          <div className="row mt-5">
            <div className="col-sm-12">
              <div className="mb-5 mt-3">
                <h1>
                  You travel the world.
                  <br />
                  WorldWise keeps track of your adventures.
                </h1>
                <h2>
                  A world map that tracks your footsteps into every city you can
                  think of. Never forget your wonderful experiences, and show
                  your friends how you have wandered the world.
                </h2>
              </div>
              <div className="pt-5">
                {localStorage.getItem("user") === null ? (
                  <Link className="cta" to="/login">
                    START TRAKING NOW
                  </Link>
                ) : (
                  <Link className="cta" to="/app">
                    START TRAKING NOW
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
