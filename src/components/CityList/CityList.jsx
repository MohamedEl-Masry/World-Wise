/*eslint-disable react/prop-types*/
import React, { useContext } from "react";
import styles from "../CityList/CityList.module.css";
import Spinner from "../Spinner/Spinner";
import CityItem from "../CityItem/CityItem";
import Message from "../Message/Message";
import { CitiesContext } from "../../Contexts/CitiesContext";

const CityList = () => {
  const { cities, isLoading } = useContext(CitiesContext);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </>
  );
};

export default CityList;
