/*eslint-disable react/prop-types*/

import React from "react";
import style from "./AppLayout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Map from "../Map/Map";
import User from "../User/User";
import { Navigate } from "react-router-dom";

const AppLayout = ({ clearUserData }) => {
  return (
    <>
      <div className={style.app}>
        {localStorage.getItem("user") !== null ? (
          <>
            <Sidebar />
            <Map />
            <User clearUserData={clearUserData} />
          </>
        ) : (
          <Navigate to={"/login"} />
        )}
      </div>
    </>
  );
};

export default AppLayout;
