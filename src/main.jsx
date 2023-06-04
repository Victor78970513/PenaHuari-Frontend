import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './App.jsx'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtdTIwMDIiLCJhIjoiY2xpYjJ0YmdyMDd6bTNlcGZ0cXR1cW5xciJ9.vIvjzo3wUg-mp9JATT-f7g';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <Root/> */}
  </React.StrictMode>,
)
