/*eslint-disable react/prop-types*/

import React, { useContext, useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import styles from "../Map/Map.module.css";
import { CitiesContext } from "../../Contexts/CitiesContext";
import { useGeolocation } from "../../hooks/useGeoLocation";
import useUrlPosition from "../../hooks/useUrlPosition";

const Map = () => {
  const { cities } = useContext(CitiesContext);
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [lat, lng] = useUrlPosition();

  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation();
  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);
  useEffect(() => {
    if (geoLocationPosition)
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
  }, [geoLocationPosition]);
  return (
    <>
      <div className={styles.mapContainer}>
        {!geoLocationPosition && (
          <button
            className={`${styles.position} ${styles.btn}`}
            onClick={getPosition}
          >
            {isLoadingPosition ? "Loading ..." : "Use your Position"}
          </button>
        )}
        <MapContainer
          center={mapPosition}
          zoom={6}
          scrollWheelZoom={false}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />

          {cities.map((city) => (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}
            >
              <Popup>
                <span>{city.emoji}</span>
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          ))}
          <ChangeCenter position={[lat || 40, lng || 0]} />
          <DetectClick />
        </MapContainer>
      </div>
    </>
  );
};
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvent({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
