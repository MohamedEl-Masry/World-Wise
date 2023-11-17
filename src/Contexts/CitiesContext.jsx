/*eslint-disable react/prop-types*/

import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

export const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  useEffect(function () {
    async function fetchCities() {
      try {
        const { data } = await axios(`${BASE_URL}/cities`);
        setCities(data);
        setIsLoading(true);
      } catch {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const { data } = await axios(`${BASE_URL}/cities/${id}`);

      setCurrentCity(data);
    } catch {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities(() => [...cities, data]);
    } catch {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await axios.delete(`${BASE_URL}/cities/${id}`);

      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <CitiesContext.Provider
        value={{
          cities,
          isLoading,
          getCity,
          currentCity,
          createCity,
          deleteCity,
        }}
      >
        {children}
      </CitiesContext.Provider>
    </>
  );
};

export default CitiesProvider;
