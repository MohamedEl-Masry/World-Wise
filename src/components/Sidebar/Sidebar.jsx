import React from "react";
import styles from "./Sidebar.module.css";
import logo from "../../assets/logo.png";
import AppNav from "../AppNav/AppNav";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <Link to={"/"} className="d-flex justify-content-center px-3 mb-3">
          <img src={logo} alt="logo" className="w-50 m-auto" />
        </Link>
        <AppNav />
        <Outlet />
        <footer className={styles.footer}>
          <p className={styles.copyright}>
            &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Sidebar;
