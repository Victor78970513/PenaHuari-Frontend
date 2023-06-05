import React, { useEffect, useState } from 'react'
import Map, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';


const MAPBOX_TOKEN = "pk.eyJ1IjoidG9uaTIwMDIiLCJhIjoiY2xpaGtieGV3MHZlNTNjbXNxdjJtcGYwciJ9.5Hqk_f2Y-wgLMh-qB-j4ew";


const Mapa = () => {


    // Map.on('load', ()=>{
    //     getRoute(start);
    // })

    // Map.addLayer({
    //     id: 'point',
    //     type: 'circle',
    //     source: {
    //       type: 'geojson',
    //       data: {
    //         type: 'FeatureCollection',
    //         features: [
    //           {
    //             type: 'Feature',
    //             properties: {},
    //             geometry: {
    //               type: 'Point',
    //               coordinates: start
    //             }
    //           }
    //         ]
    //       }
    //     },
    //     paint:{
    //         'circle-radius': 10,
    //     'circle-color': '#3887be'
    //     }
    // });

    const [lat, setLat] = useState(-16.497556200743023);
     const [long, setLong] = useState(-68.13875600159479);

    useEffect(() => {
        // Obtener la ubicación actual
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }, []);

    const successCallback = (position) => {
        //obteniedo posicion
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setLat(lat);
        setLong(long);
    
    };

    console.log(lat);
    console.log(long);

    
    const initialView = {
        latitude: parseFloat(lat),
        longitude: parseFloat(long),
        zoom: 12
    };

    const restaurant = {
        latitude: -16.497556200743023,
        longitude: -68.13875600159479,
        color: "red"
    }

    const persona = {
        latitude: parseFloat(lat),
        longitude: parseFloat(long),
        color: "orange"
    }

    const errorCallback = (error) => {
        console.error('Error al obtener la ubicación:', error);
        console.log('chale choqito no se pudo')
    };

  return (
    <div
        style={{
            display: "grid",
            placeContent: "center"
        }}
    >
        <Map
          initialViewState={initialView}
          style={{width:315, height: 519, borderRadius: 20}}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          <Marker {...restaurant} />
          <Marker {...persona} />
        </Map>
    </div>
  )
}

export default Mapa
