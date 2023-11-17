/*eslint-disable react/prop-types*/

import React, { useContext } from "react";
import styles from "../CityItem/CityItem.module.css";
import { Link } from "react-router-dom";
import { CitiesContext } from "../../Contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity, deleteCity } = useContext(CitiesContext);
  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }
  return (
    <>
      <li className="">
        <Link
          className={`${styles.cityItem} ${
            id === currentCity.id ? styles["cityItem--active"] : ""
          }`}
          to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        >
          <span className={styles.emoji}>{emoji}</span>
          <h3 className={styles.name}>{cityName}</h3>
          <time className={styles.date}>{formatDate(date)}</time>
          <button className={styles.deleteBtn} onClick={handleClick}>
            <span>&times;</span>
          </button>
        </Link>
      </li>
    </>
  );
};

export default CityItem;
