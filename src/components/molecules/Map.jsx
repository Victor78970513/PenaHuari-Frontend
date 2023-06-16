import React, { useState } from "react";
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  Source,
  Layer,
} from "react-map-gl";
import Button from "../atoms/Button";
import "./Map.css"
function MapBox() {
  const [lng, setLng] = useState(-68.1396478468924);
  const [lat, setLat] = useState(-16.4985065423747);
  const [userLng, setUserLng] = useState(null);
  const [userLat, setUserLat] = useState(null);
  const [ruta, setRuta] = useState(null);
  const handleGeolocate = (position) => {
    setUserLng(position.coords.longitude);
    setUserLat(position.coords.latitude);
  };
  const obtenerRuta = async () => {
    const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${lng},${lat};${userLng},${userLat}?geometries=geojson&access_token=pk.eyJ1Ijoid2lzY28xMiIsImEiOiJjbGhncHk1dWwwYXIxM2NwODk3cHEyemc5In0.lestajmAjlTu3qsjw-gNsg`;
    const res = await fetch(url);
    const data = await res.json();
    setRuta(data.routes[0].geometry);
  };

  return (
    <div className="mapa-container">
      <Map
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 14,
        }}
        mapboxAccessToken="pk.eyJ1Ijoid2lzY28xMiIsImEiOiJjbGhncHk1dWwwYXIxM2NwODk3cHEyemc5In0.lestajmAjlTu3qsjw-gNsg"
        style={{ width: "315px", height: "519px", borderRadius: "30px",marginBottom:"20px" }}
        mapStyle={"mapbox://styles/wisco12/clhi0osie02pa01pa51byh81b"}
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserHeading={true}
          showUserLocation={true}
          onGeolocate={handleGeolocate}
          position="bottom-right"
        />
        {ruta && (
          <Source type="geojson" data={{ type: "Feature", geometry: ruta }}>
            <Layer
              id="ruta"
              type="line"
              layout={{
                "line-join": "round",
                "line-cap": "round",
              }}
              paint={{
                "line-color": "#0070f3",
                "line-width": 3,
              }}
            />
          </Source>
        )}
      </Map>
      <span
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Calle Sagarnaga #339
      </span>
      <Button
        css={"get-route-button"}
        icon={"mdi:map-marker-multiple"}
        text={"Let's get route"}
        onClick={obtenerRuta}
      />
    </div>
  );
}

export default MapBox;
