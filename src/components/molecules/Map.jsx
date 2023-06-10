import React, { useState } from "react";
import {
  GeolocateControl,
  Layer,
  Map,
  Marker,
  NavigationControl,
  Source,
} from "react-map-gl";
const MapBox = () => {
  const [lng, setLng] = useState(-68.13882034873808);
  const [lat, setLat] = useState(-16.49766939997634);
  const [userLng, setUserLng] = useState(null);
  const [userLat, setUserLat] = useState(null);
  const [ruta, setRuta] = useState(null);
  const localizacion = (position) => {
    setUserLng(position.coords.longitude);
    setUserLat(position.coords.latitude);
  };
  const obtenerRuta =async () => {
    const url = `https://api.mapbox.com/directions/v5/mapbox/cycling/${lng},${lat};${userLng},${userLat}?geometries=geojson&access_token=pk.eyJ1Ijoid2lzY28xMiIsImEiOiJjbGhncHk1dWwwYXIxM2NwODk3cHEyemc5In0.lestajmAjlTu3qsjw-gNsg`
    const res = await fetch(url);
    const data = await res.json();
    setRuta(data.routes[0].geometry);
  }
  return (
    <div className="mapa-container">
      <Map
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 14,
        }}
        mapboxAccessToken="pk.eyJ1Ijoid2lzY28xMiIsImEiOiJjbGhncHk1dWwwYXIxM2NwODk3cHEyemc5In0.lestajmAjlTu3qsjw-gNsg"
        style={{ width: "315px", height: "519px", borderRadius: "20px",marginBottom:"30px",marginLeft:"30px"}}
        mapStyle={"mapbox://styles/wisco12/clhi0osie02pa01pa51byh81b"}
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserHeading={true}
          showUserLocation={true}
          onGeolocate={localizacion}
          position="bottom-right"
        />
        {
            ruta && (
                <Source type="geojson" data={{ type: "Feature", geometry:ruta}}>
                <Layer
                  id="ruta"
                  type="line"
                  layout={{ "line-join": "round", "line-cap": "round" }}
                  paint={{
                      "line-color":"#000000",
                      "line-width":8
                  }}
                />
              </Source>
            )
        }
      </Map>
      <span onClick={obtenerRuta} style={{color:"white"}}>HOLAAAAA</span>
    </div>
  );
};

export default MapBox;
