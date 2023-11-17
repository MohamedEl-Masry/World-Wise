/*eslint-disable react/prop-types*/

import React, { useContext } from "react";
import styles from "../CountryList/CountryList.module.css";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import CountryItem from "../CountryItem/CountryItem";
import { CitiesContext } from "../../Contexts/CitiesContext";

const CountryList = () => {
  const { cities, isLoading } = useContext(CitiesContext);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <>
      <ul className={styles.countryList}>
        {countries.map((country, idx) => (
          <CountryItem country={country} key={idx} />
        ))}
      </ul>
    </>
  );
};

export default CountryList;
